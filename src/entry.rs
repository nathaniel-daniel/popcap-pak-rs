use crate::{
    MS_FILETIME_START_TICKS, PATH_SEPERATOR_BYTESET, TICKS_PER_NANOSECOND, TICKS_PER_SECOND,
};
use bstr::{BStr, BString, ByteSlice};
use chrono::NaiveDateTime;
use std::{
    borrow::Cow,
    convert::TryFrom,
    io::{Cursor, Read},
};

/// An Entry, representative of a file inside a pakfile.
#[derive(Debug)]
pub struct Entry<'a> {
    pub(crate) path: BString,
    pub(crate) filetime: u64,
    pub(crate) data: Cursor<Cow<'a, [u8]>>,
}

impl<'a> Entry<'a> {
    /// Get the directory of the file, or [`None`] if it doesn't exist.
    pub fn dir(&self) -> Option<&BStr> {
        let i = self.path.rfind_byteset(PATH_SEPERATOR_BYTESET)?;
        Some((&self.path[..i]).into())
    }

    /// Get the name of the file.
    pub fn name(&self) -> &BStr {
        let i = self
            .path
            .rfind_byteset(PATH_SEPERATOR_BYTESET)
            .map(|i| i + 1)
            .unwrap_or(0);
        (&self.path[i..]).into()
    }

    /// Get the entire path of the file.
    pub fn path(&self) -> &BStr {
        (self.path.as_slice()).into()
    }

    /// Try to get the last write time of this file as a [`NaiveDateTime`]. Returns [`None`] if the filetime is invalid and/or could not be converted.
    pub fn filetime(&self) -> Option<NaiveDateTime> {
        let filetime = i64::try_from(self.filetime).ok()? + MS_FILETIME_START_TICKS;
        let filetime = NaiveDateTime::from_timestamp(
            filetime / TICKS_PER_SECOND,
            (filetime.abs() % TICKS_PER_SECOND) as u32 * TICKS_PER_NANOSECOND,
        );
        Some(filetime)
    }

    /// Get an iterator over all the bytes in the file.
    pub fn iter_data<'b>(&'b self) -> impl Iterator<Item = u8> + 'b {
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

    /// Decrypt the data and take ownership if it is borrowed. Position data of the file is lost.
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
