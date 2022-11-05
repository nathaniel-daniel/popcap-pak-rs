#![warn(clippy::integer_arithmetic)]

use std::time::Duration;
use std::time::SystemTime;

/// The number of nanos per second
const NANOSECONDS_PER_SECOND: u64 = 1_000_000_000;

/// The difference between the unix epoch and the microsoft epoch in seconds.
///
/// See https://devblogs.microsoft.com/oldnewthing/20220602-00/?p=106706.
const EPOCH_DIFFERENCE_SECONDS: u64 = 11_644_473_600;

/// The difference between the unix epoch and the microsoft epoch in nanoseconds.
const EPOCH_DIFFERENCE_NANOSECONDS: u64 = EPOCH_DIFFERENCE_SECONDS * NANOSECONDS_PER_SECOND;

/// The difference between the unix epoch and the microsoft epoch in ticks.
const EPOCH_DIFFERENCE_TICKS: u64 = EPOCH_DIFFERENCE_NANOSECONDS / NANOSECONDS_PER_TICK;

/// The number of nanoseconds per tick in a FileTime.
const NANOSECONDS_PER_TICK: u64 = 100;

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

/// A failure occured while converting from a file time into a system time
#[derive(Debug)]
pub enum TryFromFileTimeError {
    /// Failed to adjust epochs.
    Adjust,

    /// Failed to convert ticks into nanos.
    Nanos,

    /// The SystemTime cannot hold the final timestamp
    SystemTime,

    /// An unspecified error occured
    Unspecified,
}

impl std::fmt::Display for TryFromFileTimeError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Adjust => f.write_str(
                "failed to adjust epochs while converting a file time into a system time",
            ),
            Self::Nanos => f.write_str(
                "failed to convert ticks into nanoseconds while converting a file time into a system time"
            ),
            Self::SystemTime => f.write_str(
                "failed to convert ticks into a system time while converting a file time into a system time"
            ),
            Self::Unspecified => f.write_str(
                "an unspecified error occured while converting a file time into a system time",
            ),
        }
    }
}

impl std::error::Error for TryFromFileTimeError {}

impl TryFrom<FileTime> for SystemTime {
    type Error = TryFromFileTimeError;

    fn try_from(file_time: FileTime) -> Result<Self, Self::Error> {
        // This is a u64 representing the # of 100 nanos since
        // January 1, 1601.
        let ticks = file_time.into_raw();

        // Adjust to unix epoch.
        //
        // We adjust first,
        // as that will lead to a small value and hopefully prevent some overflows.
        let adjusted = ticks
            .checked_sub(EPOCH_DIFFERENCE_TICKS)
            .ok_or(TryFromFileTimeError::Adjust)?;

        // Convert ticks to nanoseconds.
        let nanos = u128::from(adjusted)
            .checked_mul(NANOSECONDS_PER_TICK.into())
            .ok_or(TryFromFileTimeError::Nanos)?;

        // Work around a backwards-compat issue in Rust stdlib.
        //
        // We can get nanos from a Duration as a u128,
        // but we can only set it as a u64.
        // To work-around, split into seconds and nanoseconds while creating a duration, then add.
        let secs_part = u64::try_from(nanos.checked_div(NANOSECONDS_PER_SECOND.into()).unwrap())
            .map_err(|_| TryFromFileTimeError::Unspecified)?;
        let offset_seconds = Duration::from_secs(secs_part);
        // 0 < the # of nanoseonds in a second < u64::MAX
        // Clippy: I don't think this can overflow/panic fo u64s.
        #[allow(clippy::integer_arithmetic)]
        let nanos_part = u64::try_from(nanos % u128::from(NANOSECONDS_PER_SECOND)).unwrap();
        let offset_nanos = Duration::from_nanos(nanos_part);
        let offset = offset_seconds
            .checked_add(offset_nanos)
            .ok_or(TryFromFileTimeError::Unspecified)?;

        // Convert to SystemTime.
        Self::UNIX_EPOCH
            .checked_add(offset)
            .ok_or(TryFromFileTimeError::SystemTime)
    }
}

/// An error that may occur while converting a SystemTime into a FileTime.
#[derive(Debug)]
pub enum TryFromSystemTimeError {
    /// An unspecified error occured
    Unspecified,
}

impl std::fmt::Display for TryFromSystemTimeError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Unspecified => f.write_str(
                "an unspecified error occured whil converting a system time into a file time",
            ),
        }
    }
}

impl std::error::Error for TryFromSystemTimeError {}

impl TryFrom<SystemTime> for FileTime {
    type Error = TryFromSystemTimeError;

    fn try_from(time: SystemTime) -> Result<Self, Self::Error> {
        // Get the nanos from the unix epoch.
        //
        // TODO: Technically we can recover from a failure here by assuming the timestamp is before the unix epoch.
        // Those timestamps won't be too common though.
        let nanos = time
            .duration_since(SystemTime::UNIX_EPOCH)
            .map_err(|_e| TryFromSystemTimeError::Unspecified)?
            .as_nanos();

        // Convert to the microsoft epoch.
        let adjusted = nanos
            .checked_add(EPOCH_DIFFERENCE_NANOSECONDS.into())
            .ok_or(TryFromSystemTimeError::Unspecified)?;

        // Convert to ticks.
        let ticks_u128 = adjusted.checked_div(NANOSECONDS_PER_TICK.into()).unwrap();

        // Fit the ticks value into a u64.
        // If it doesn't fit, it isn't a valid FileTime.
        let raw = u64::try_from(ticks_u128).map_err(|_| TryFromSystemTimeError::Unspecified)?;

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

        // let time: SystemTime = FileTime::from_raw(u64::MAX).try_into().unwrap();
    }
}
