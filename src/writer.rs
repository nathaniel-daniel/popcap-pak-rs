use crate::PakError;
use crate::PakResult;
use byteorder::WriteBytesExt;
use std::io::Write;

pub struct PakWriter<W>(W, Vec<u8>);

impl<W: Write> PakWriter<W> {
    pub fn new(writer: W) -> Self {
        Self(writer, Vec::new())
    }

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
}

impl<W: Write> Write for PakWriter<W> {
    fn write(&mut self, buf: &[u8]) -> Result<usize, std::io::Error> {
        self.1.clear();
        self.1.reserve(buf.len());
        self.1.extend(buf.iter().map(|b| b ^ 0xf7));
        let n = self.0.write(&self.1)?;
        Ok(n)
    }

    fn flush(&mut self) -> Result<(), std::io::Error> {
        self.0.flush()
    }
}
