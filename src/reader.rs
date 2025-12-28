use crate::FILEFLAGS_END;
use crate::FileTime;
use crate::MAGIC;
use crate::PakError;
use crate::Record;
use crate::VERSION;
use std::io::Read;

/// A struct to help read pak files
pub struct PakReader<R>(R);

impl<R> PakReader<R>
where
    R: Read,
{
    /// Make a new pak reader
    pub fn new(reader: R) -> Self {
        Self(reader)
    }

    /// Read and validate the magic number.
    pub(crate) fn read_magic(&mut self) -> Result<(), PakError> {
        let mut magic = [0; 4];
        self.read_exact(&mut magic)?;
        if magic != MAGIC {
            Err(PakError::InvalidMagic(magic))
        } else {
            Ok(())
        }
    }

    /// Read and validate the version
    pub(crate) fn read_version(&mut self) -> Result<(), PakError> {
        let mut version = [0; 4];
        self.read_exact(&mut version)?;

        if version != VERSION {
            Err(PakError::InvalidVersion(version))
        } else {
            Ok(())
        }
    }

    /// Read the file name
    pub(crate) fn read_filename(&mut self) -> Result<Vec<u8>, PakError> {
        let file_length = usize::from(self.read_u8()?);
        let mut file_name = vec![0; file_length];

        self.read_exact(&mut file_name)?;

        Ok(file_name)
    }

    pub(crate) fn read_records(&mut self) -> Result<Vec<Record>, PakError> {
        let mut records = Vec::new();
        let mut flags = self.read_u8()?;

        while flags & FILEFLAGS_END == 0 {
            let name = self.read_filename()?;
            let file_size = self.read_u32()?;
            let file_time = FileTime::from_raw(self.read_u64()?);
            flags = self.read_u8()?;

            records.push(Record {
                name,
                file_size,
                file_time,
            });
        }

        Ok(records)
    }

    /// Read a u8
    pub(crate) fn read_u8(&mut self) -> Result<u8, PakError> {
        let mut buffer = [0; std::mem::size_of::<u8>()];
        self.read_exact(&mut buffer)?;
        Ok(buffer[0])
    }

    /// Read a u32, little endian
    pub(crate) fn read_u32(&mut self) -> Result<u32, PakError> {
        let mut buffer = [0; std::mem::size_of::<u32>()];
        self.read_exact(&mut buffer)?;
        Ok(u32::from_le_bytes(buffer))
    }

    /// Read a u64, little endian
    pub(crate) fn read_u64(&mut self) -> Result<u64, PakError> {
        let mut buffer = [0; std::mem::size_of::<u64>()];
        self.read_exact(&mut buffer)?;
        Ok(u64::from_le_bytes(buffer))
    }

    /// Get the inner reader for this file.
    pub fn into_reader(self) -> R {
        self.0
    }
}

impl<R: Read> Read for PakReader<R> {
    fn read(&mut self, buf: &mut [u8]) -> Result<usize, std::io::Error> {
        let n = self.0.read(buf)?;
        buf.iter_mut().for_each(|el| *el ^= 0xf7);
        Ok(n)
    }
}
