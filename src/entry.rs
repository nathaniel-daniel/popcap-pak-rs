use crate::MS_FILETIME_START_TICKS;
use crate::TICKS_PER_NANOSECOND;
use std::borrow::Cow;
use std::io::Cursor;
use std::io::Read;
use std::time::Duration;
use std::time::SystemTime;

/// An Entry, representative of a file inside a pakfile.
#[derive(Debug)]
pub struct Entry<'a> {
    /// The "path" of the file.
    ///
    /// The encoding is unspecified,
    /// but this is only ascii in PopCap Games.
    pub(crate) path: Box<[u8]>,
    pub(crate) filetime: u64,
    pub(crate) data: Cursor<Cow<'a, [u8]>>,
}

impl<'a> Entry<'a> {
    /// Get the starting index into the path variable of the name of the file, if it exists.
    ///
    /// # Returns
    /// If the path only contains the file name, this returns `None`.
    fn get_file_name_start_index(&self) -> Option<usize> {
        self.path
            .iter()
            .rev()
            .position(|&b| b == b'/' || b == b'\\')
            .map(|index| self.path.len() - index)
    }

    /// Get the directory of the file, or [`None`] if it doesn't exist.
    pub fn dir(&self) -> Option<&[u8]> {
        let index = self.get_file_name_start_index()?.saturating_sub(1);
        Some(&self.path[..index])
    }

    /// The same as [`Self::dir`],
    /// but tries to make the byte slice a str.
    ///
    /// This is provided as most paths are ascii.
    pub fn dir_str(&self) -> Option<Result<&str, std::str::Utf8Error>> {
        self.dir().map(std::str::from_utf8)
    }

    /// Get the name of the file.
    pub fn name(&self) -> &[u8] {
        let index = self.get_file_name_start_index().unwrap_or(0);
        &self.path[index..]
    }

    /// The same as [`Self::name`],
    /// but tries to make the byte slice a str.
    ///
    /// This is provided as most paths are ascii.
    pub fn name_str(&self) -> Result<&str, std::str::Utf8Error> {
        std::str::from_utf8(self.name())
    }

    /// Get the entire path of the file.
    pub fn path(&self) -> &[u8] {
        &self.path
    }

    /// The same as [`Self::path`],
    /// but tries to make the byte slice a str.
    ///
    /// This is provided as most paths are ascii.
    pub fn path_str(&self) -> Result<&str, std::str::Utf8Error> {
        std::str::from_utf8(self.path())
    }

    /// Try to get the last write time of this file as a [`SystemTime`].
    ///
    /// Returns [`None`] if the filetime is invalid and/or could not be converted.
    pub fn filetime(&self) -> Option<SystemTime> {
        let filetime = i64::try_from(self.filetime).ok()? + MS_FILETIME_START_TICKS;
        let offset = Duration::from_nanos(filetime as u64 * u64::from(TICKS_PER_NANOSECOND));
        Some(SystemTime::UNIX_EPOCH + offset)
    }

    /// Get an iterator over all the bytes in the file.
    pub fn iter_data(&self) -> impl Iterator<Item = u8> + '_ {
        let borrowed = self.is_borrowed();

        self.data
            .get_ref()
            .iter()
            .copied()
            .map(move |b| if borrowed { b ^ 0xf7 } else { b })
    }

    /// Check if the file is borrowed aka does not own its data.
    pub fn is_borrowed(&self) -> bool {
        match self.data.get_ref() {
            Cow::Owned(_) => false,
            Cow::Borrowed(_) => true,
        }
    }

    /// Get the filesize.
    pub fn size(&self) -> usize {
        self.data.get_ref().len()
    }

    /// Decrypt the data and take ownership if it is borrowed.
    ///
    /// Position data of the file is lost.
    pub fn into_owned(mut self) -> Entry<'static> {
        Entry {
            path: self.path,
            filetime: self.filetime,
            data: {
                // TODO: Preserve position data. Just reuse the old cursor, swap new data in/out.
                match self.data.get_mut() {
                    Cow::Owned(data) => Cursor::new(std::mem::take(data).into()),
                    Cow::Borrowed(data) => Cursor::new(data.iter().map(|b| b ^ 0xf7).collect()),
                }
            },
        }
    }
}

impl<'a> Read for Entry<'a> {
    fn read(&mut self, buf: &mut [u8]) -> Result<usize, std::io::Error> {
        let n = self.data.read(buf)?;
        if self.is_borrowed() {
            buf.iter_mut().for_each(|el| *el ^= 0xf7);
        }
        Ok(n)
    }
}

impl<'a> PartialEq for Entry<'a> {
    fn eq(&self, other: &Self) -> bool {
        self.path == other.path // TODO: Consider not including filetime/path checks
            && self.filetime == other.filetime
            && self.iter_data().eq(other.iter_data())
    }
}
