# popcap-pak

A library to facilitate the reading of Popcap's pak files.

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

<https://nathaniel-daniel.github.io/popcap-pak-rs/dist/>

## License

Licensed under either of

- Apache License, Version 2.0 (LICENSE-APACHE or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license (LICENSE-MIT or http://opensource.org/licenses/MIT)
  at your option.

## Contributing

Unless you explicitly state otherwise,
any contribution intentionally submitted for inclusion in the work by you,
as defined in the Apache-2.0 license,
shall be dual licensed as above,
without any additional terms or conditions.
