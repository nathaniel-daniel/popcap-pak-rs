use crate::entry::Entry;
use crate::reader::PakReader;
use crate::writer::PakWriter;
use crate::PakError;
use crate::FILEFLAGS_DEFAULT;
use crate::FILEFLAGS_END;
use crate::MAGIC;
use crate::VERSION;
use std::io::Cursor;
use std::io::Read;
use std::io::Write;

/// An in-memory PAK file.
///
/// It may reference borrowed data to avoid decrypting the entire file in memory all at once.
#[derive(Debug, PartialEq)]
pub struct Pak<'a> {
    /// All entries in this PAK file.
    ///
    /// This will likely become private in the future and replaced by safer ways to interact with entries.
    pub entries: Vec<Entry<'a>>,
}

impl<'a> Pak<'a> {
    /// Make an empty PAK file.
    pub fn new() -> Self {
        Self {
            entries: Vec::new(),
        }
    }

    /// Read a PAK file from a reader.
    ///
    /// [`Pak::from_bytes`] should probably be preferred, as it is faster to load upfront, though reading takes slightly longer
    /// and manipulations will incur memory allocations and expensisve copying/decryption.
    ///
    /// # Returns
    /// Returns a PAK file with ownership over is data, decrypting it all upfront.
    pub fn from_read<R>(reader: R) -> Result<Pak<'static>, PakError>
    where
        R: Read,
    {
        let mut reader = PakReader::new(reader);
        reader.read_magic()?;
        reader.read_version()?;

        let records = reader.read_records()?;

        let mut entries = Vec::with_capacity(records.len());
        for record in records {
            let mut data = vec![
                0;
                usize::try_from(record.file_size).map_err(|error| {
                    PakError::InvalidRecordFileSize {
                        file_size: record.file_size,
                        error,
                    }
                })?
            ];
            reader.read_exact(&mut data)?;

            entries.push(Entry {
                path: record.name.into(),
                file_time: record.file_time,
                data: Cursor::new(data.into()),
            });
        }

        Ok(Pak { entries })
    }

    /// Read a PAK file from a byte slice.
    ///
    /// # Returns
    /// Returns a PAK file that borrows sections of data from the slice.
    ///
    /// Compared to [`Pak::from_read`],
    /// this takes less time to load,
    /// but reading takes slightly longer and manipulations require copying and decrypting the data.
    pub fn from_bytes(bytes: &'a [u8]) -> Result<Pak<'a>, PakError> {
        let mut reader = PakReader::new(bytes);
        reader.read_magic()?;
        reader.read_version()?;

        let records = reader.read_records()?;

        let mut bytes = reader.into_reader();

        let mut entries = Vec::with_capacity(records.len());
        for record in records {
            let len = usize::try_from(record.file_size).map_err(|error| {
                PakError::InvalidRecordFileSize {
                    file_size: record.file_size,
                    error,
                }
            })?;
            let data = &bytes[..len];
            bytes = &bytes[len..];

            entries.push(Entry {
                path: record.name.into(),
                file_time: record.file_time,
                data: Cursor::new(data.into()),
            });
        }

        Ok(Self { entries })
    }

    /// Takes ownership of all data,
    /// decrypting it and returing a [`Pak`] that is guaranteed to not reference external data.
    pub fn into_owned(self) -> Pak<'static> {
        let entries = self
            .entries
            .into_iter()
            .map(|entry| entry.into_owned())
            .collect();

        Pak { entries }
    }

    /// Writes data to a writeable destination.
    ///
    /// This takes `&mut self` because at the end of this function,
    /// all files' cursors will be at the end of the stream.
    pub fn write_to<W>(&mut self, writer: W) -> Result<(), PakError>
    where
        W: Write,
    {
        let mut writer = PakWriter::new(writer);
        writer.write_all(MAGIC)?;
        writer.write_all(VERSION)?;

        for entry in self.entries.iter() {
            writer.write_u8(FILEFLAGS_DEFAULT)?;
            writer.write_filename(&entry.path)?;
            writer.write_u32(entry.size().try_into().map_err(|error| {
                PakError::InvalidFileDataLength {
                    length: entry.size(),
                    error,
                }
            })?)?;
            writer.write_u64(entry.file_time.into_raw())?;
        }
        writer.write_u8(FILEFLAGS_END)?;

        for entry in self.entries.iter_mut() {
            std::io::copy(entry, &mut writer)?;
        }

        Ok(())
    }
}

impl<'a> Default for Pak<'a> {
    fn default() -> Self {
        Self::new()
    }
}
