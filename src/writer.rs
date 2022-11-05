use crate::PakError;
use crate::PakResult;
use std::io::Write;

pub struct PakWriter<W> {
    writer: W,
    buffer: Vec<u8>,
}

impl<W> PakWriter<W>
where
    W: Write,
{
    /// Make a new [`PakWriter`]
    pub fn new(writer: W) -> Self {
        Self {
            writer,
            buffer: Vec::new(),
        }
    }

    /// Write a filename.
    pub(crate) fn write_filename(&mut self, name: &[u8]) -> PakResult<()> {
        let length = name.len();
        let length = name
            .len()
            .try_into()
            .map_err(|error| PakError::InvalidFileNameLength { length, error })?;
        self.write_u8(length)?;
        self.write_all(name)?;
        Ok(())
    }

    /// Write a `u8`.
    pub(crate) fn write_u8(&mut self, n: u8) -> PakResult<()> {
        self.write_all(&[n])?;
        Ok(())
    }

    /// Write a `u32`.
    pub(crate) fn write_u32(&mut self, n: u32) -> PakResult<()> {
        self.write_all(&n.to_le_bytes())?;
        Ok(())
    }

    /// Write a `u64`.
    pub(crate) fn write_u64(&mut self, n: u64) -> PakResult<()> {
        self.write_all(&n.to_le_bytes())?;
        Ok(())
    }
}

impl<W: Write> Write for PakWriter<W> {
    fn write(&mut self, buf: &[u8]) -> Result<usize, std::io::Error> {
        self.buffer.clear();
        self.buffer.reserve(buf.len());
        self.buffer.extend(buf.iter().map(|b| b ^ 0xf7));
        let n = self.writer.write(&self.buffer)?;
        Ok(n)
    }

    fn flush(&mut self) -> Result<(), std::io::Error> {
        self.writer.flush()
    }
}
