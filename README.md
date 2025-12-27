# popcap-pak

A library to facilitate the reading of pak files.

## Format

The entire file must be xored with `0xf7` before proceeding.
The file format appears to be little-endian.

```
Header
4 bytes - Magic (Should be [0xc0, 0x4a, 0xc0, 0xba])
4 bytes - Version (Should be all 0)
loop
    1 byte - Record Flag (exit loop if 0x80)
    1 byte - File name length (N)
    N bytes - Filename
    4 bytes - Filesize (u32)
    4 bytes - Last write time (Microsoft FILETIME struct)
end

Body
for each record
    record.filesize bytes - File data
end
```

## Demo

[https://nathaniel-daniel.github.io/popcap-pak-rs/dist/]
