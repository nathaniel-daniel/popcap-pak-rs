use crate::{PakError, PakResult, Record, FILEFLAGS_END, MAGIC, VERSION};
use bstr::BString;
use byteorder::{ReadBytesExt, LE};
use std::io::Read;

pub struct PakReader<R>(R);

impl<R: Read> PakReader<R> {
    pub fn new(reader: R) -> Self {
        Self(reader)
    }

    pub fn read_magic(&mut self) -> PakResult<()> {
        let mut magic = [0; 4];
        self.read_exact(&mut magic)?;
        if magic != MAGIC {
            Err(PakError::InvalidMagic(magic))
        } else {
            Ok(())
        }
    }

    pub fn read_version(&mut self) -> PakResult<()> {
        let mut version = [0; 4];
        self.read_exact(&mut version)?;

        if version != VERSION {
            Err(PakError::InvalidVersion(version))
        } else {
            Ok(())
        }
    }

    pub fn read_filename(&mut self) -> PakResult<BString> {
        let file_length = self.read_u8()? as usize;
        let mut file_name = vec![0; file_length];

        self.read_exact(&mut file_name)?;

        Ok(BString::from(file_name))
    }

    pub(crate) fn read_records(&mut self) -> PakResult<Vec<Record>> {
        let mut records = Vec::new();
        let mut flags = self.read_u8()?;

        while flags & FILEFLAGS_END == 0 {
            let name = self.read_filename()?;
            let file_size = self.read_u32::<LE>()?;
            let filetime = self.read_u64::<LE>()?;
            flags = self.read_u8()?;

            records.push(Record {
                name,
                file_size,
                filetime,
            });
        }

        Ok(records)
    }

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
