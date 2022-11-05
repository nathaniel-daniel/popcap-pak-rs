#![warn(clippy::as_conversions)]

/// Pak Entry impl
pub mod entry;
/// Pak impl
pub mod pak;
pub(crate) mod reader;
pub(crate) mod writer;

pub use crate::entry::Entry;
pub use crate::pak::Pak;

/// The magic number of a valid pak file. `[0xc0, 0x4a, 0xc0, 0xba]` XORed with `0xf7`, or "7½7M". This file type is often called "7x7M" as a result.
pub(crate) const MAGIC: &[u8] = &[0xc0, 0x4a, 0xc0, 0xba];
/// The version of pakfile that this library can read. `[0; 4]`.
pub(crate) const VERSION: &[u8] = &[0; 4];

const FILEFLAGS_DEFAULT: u8 = 0x00;
const FILEFLAGS_END: u8 = 0x80;

const TICKS_PER_SECOND: i64 = 10_000_000;
const TICKS_PER_NANOSECOND: u32 = 100;
const MS_FILETIME_START_SECS: i64 = -11_644_473_600;
const MS_FILETIME_START_TICKS: i64 = MS_FILETIME_START_SECS * TICKS_PER_SECOND;

/// Error type of this library
#[derive(Debug)]
pub enum PakError {
    /// IO errors that may occur during use
    Io(std::io::Error),

    /// Invalid Magic number.
    ///
    /// See [`MAGIC`].
    InvalidMagic([u8; 4]),

    /// Invalid Pak Version.
    ///
    /// See [`VERSION`].
    InvalidVersion([u8; 4]),

    /// The filename is too long.
    ///
    /// See [`MAX_NAME_LEN`].
    InvalidFileNameLength {
        length: usize,
        error: std::num::TryFromIntError,
    },

    /// The file data is too long.
    ///
    /// See [`MAX_DATA_LEN`].
    InvalidFileDataLength {
        length: usize,
        error: std::num::TryFromIntError,
    },

    /// The size of the file data in the record is too long.
    InvalidRecordFileSize {
        file_size: u32,
        error: std::num::TryFromIntError,
    },
}

impl From<std::io::Error> for PakError {
    fn from(e: std::io::Error) -> Self {
        Self::Io(e)
    }
}

impl std::fmt::Display for PakError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Io(e) => e.fmt(f),
            Self::InvalidMagic(magic) => {
                write!(f, "invalid magic number '{magic:?}', expected '{MAGIC:?}'",)
            }
            Self::InvalidVersion(version) => {
                write!(f, "invalid version '{version:?}', expected '{VERSION:?}'",)
            }
            Self::InvalidFileNameLength { length, .. } => {
                write!(f, "invalid file name length '{length}'")
            }
            Self::InvalidFileDataLength { length, .. } => {
                write!(f, "invalid file data length '{length}'")
            }
            Self::InvalidRecordFileSize { file_size, .. } => {
                write!(f, "invalid record file size '{file_size}'")
            }
        }
    }
}

impl std::error::Error for PakError {
    fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
        match self {
            Self::Io(error) => Some(error),
            Self::InvalidFileNameLength { error, .. } => Some(error),
            Self::InvalidFileDataLength { error, .. } => Some(error),
            _ => None,
        }
    }
}

#[derive(Debug)]
struct Record {
    pub name: Vec<u8>,
    pub file_size: u32,
    pub filetime: u64,
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::Path;

    const EXTRACT_PATH: &str = "test-extract";
    const PAK_PATH: &str = "test_data/Simple Building.pak";

    fn extract(pak: &mut Pak, extract_dir: &Path) {
        let _ = std::fs::remove_dir_all(extract_dir);

        for entry in pak.entries.iter_mut() {
            let entry_path = entry.path_str().unwrap();
            let entry_dir = entry.dir_str().transpose().unwrap();
            let entry_name = entry.name_str().unwrap();

            let (expected_entry_dir, expected_entry_name) = entry_path
                .rsplit_once(['/', '\\'])
                .map(|(dir, name)| (Some(dir), name))
                .unwrap_or((None, entry_path));
            assert!(
                expected_entry_name == entry_name,
                "{expected_entry_name} != {entry_name}"
            );
            assert!(
                expected_entry_dir == entry_dir,
                "{expected_entry_dir:?} != {entry_dir:?}"
            );

            println!("Extracting '{}'...", entry_path);
            if let Some(dir) = entry_dir {
                let entry_extract_dir = extract_dir.join(dir);
                std::fs::create_dir_all(&entry_extract_dir).unwrap();
            }

            let entry_extract_path = extract_dir.join(entry_path);
            let mut f = std::fs::File::create(&entry_extract_path).unwrap();
            std::io::copy(entry, &mut f).unwrap();
        }
    }

    #[test]
    fn extract_read() {
        let f = std::fs::File::open(PAK_PATH).unwrap();
        let mut p = Pak::from_read(f).unwrap();
        let extract_dir = Path::new(EXTRACT_PATH).join("read");

        extract(&mut p, &extract_dir);
    }

    #[test]
    fn extract_bytes() {
        let data = std::fs::read(PAK_PATH).unwrap();
        let mut p = Pak::from_bytes(&data).unwrap();
        let extract_dir = Path::new(EXTRACT_PATH).join("bytes");

        extract(&mut p, &extract_dir);
    }

    #[test]
    fn bytes_vs_read() {
        let data = std::fs::read(PAK_PATH).unwrap();
        let read = Pak::from_read(std::io::Cursor::new(&data)).unwrap();
        let bytes = Pak::from_bytes(&data).unwrap();
        assert_eq!(bytes, read);
    }

    #[test]
    fn round_trip() {
        let original = std::fs::read(PAK_PATH).unwrap();
        let mut pak = Pak::from_read(std::io::Cursor::new(&original)).unwrap();
        let mut round = Vec::new();
        pak.write_to(&mut round).unwrap();
        assert_eq!(&round, &original);
        let pak2 = Pak::from_read(std::io::Cursor::new(&round)).unwrap();
        assert_eq!(pak, pak2);
    }
}
