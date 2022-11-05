use std::time::Duration;
use std::time::SystemTime;

/// The number of nanos per second
const NANOSECONDS_PER_SECOND: u64 = 1_000_000_000;

/// The difference between the unix epoch and the microsoft epoch in seconds
const EPOCH_DIFFERENCE_SECONDS: u64 = 11_644_473_600;

/// The difference between the unix epoch and the microsoft epoch in nanoseconds
const EPOCH_DIFFERENCE_NANOSECONDS: u64 = EPOCH_DIFFERENCE_SECONDS * NANOSECONDS_PER_SECOND;

/// The number of nanoseconds per tick
const NANOSECONDS_PER_TICK: u8 = 100;

/// A file time.
///
/// This is a wrapper for Microsoft's FILETIME struct.
/// This is a UTC timestamp.
/// This type's resolution is 100 nanoseconds.
#[derive(Debug, Copy, Clone, Eq, PartialEq, Hash, PartialOrd, Ord)]
pub struct FileTime {
    time: u64,
}

impl FileTime {
    /// Make a [`FileTime`] from the given raw value.
    pub fn from_raw(time: u64) -> Self {
        Self { time }
    }

    /// Get the raw value
    pub fn into_raw(self) -> u64 {
        self.time
    }
}

impl TryInto<SystemTime> for FileTime {
    type Error = ();

    fn try_into(self) -> Result<SystemTime, Self::Error> {
        // This is a u64 representing the # of 100 nanos since
        // January 1, 1601.
        let raw = self.into_raw();

        // Get nanos.
        let nanos = raw.checked_mul(NANOSECONDS_PER_TICK.into()).ok_or(())?;

        // Adjust.
        let adjusted = nanos.checked_sub(EPOCH_DIFFERENCE_NANOSECONDS).ok_or(())?;

        // Convert to SystemTime
        SystemTime::UNIX_EPOCH
            .checked_add(Duration::from_nanos(adjusted))
            .ok_or(())
    }
}

impl TryFrom<SystemTime> for FileTime {
    type Error = ();

    fn try_from(time: SystemTime) -> Result<Self, Self::Error> {
        // Get the nanos from the unix epoch.
        //
        // TODO: Technically we can recover from a failure here by assuming the timestamp is before the unix epoch.
        // Those timestamps won't be too common though.
        let nanos = time
            .duration_since(SystemTime::UNIX_EPOCH)
            .map_err(|_e| ())?
            .as_nanos();

        // Convert to the microsoft epoch.
        let adjusted = nanos
            .checked_add(EPOCH_DIFFERENCE_NANOSECONDS.into())
            .ok_or(())?;

        // Convert to ticks.
        let ticks_u128 = adjusted.checked_div(NANOSECONDS_PER_TICK.into()).unwrap();

        // Fit the ticks value into a u64.
        // If it doesn't fit, it isn't a valid FileTime.
        let raw = u64::try_from(ticks_u128).map_err(|_| ())?;

        Ok(Self::from_raw(raw))
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn system_time_round() {
        let now = SystemTime::now();
        let file_time: FileTime = now.try_into().unwrap();
        let round: SystemTime = file_time.try_into().unwrap();
        assert!(now == round);
    }
}
