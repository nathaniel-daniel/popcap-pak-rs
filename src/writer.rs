use crate::{PakError, PakResult};
use bstr::BStr;
use byteorder::WriteBytesExt;
use std::{convert::TryInto, io::Write};

pub struct PakWriter<W>(W, Vec<u8>);

impl<W: Write> PakWriter<W> {
    pub fn new(writer: W) -> Self {
        Self(writer, Vec::new())
    }

    pub fn write_filename(&mut self, name: &BStr) -> PakResult<()> {
        let name_len = name.len();
        let name_len = name_len
            .try_into()
            .map_err(|_| PakError::InvalidNameLength(name_len))?;
        self.write_u8(name_len)?;
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
