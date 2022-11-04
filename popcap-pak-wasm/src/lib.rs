use js_sys::ArrayBuffer;
use js_sys::Uint8Array;
use std::cell::RefCell;
use std::collections::hash_map::Entry as HashMapEntry;
use std::collections::HashMap;
use std::rc::Rc;
use std::rc::Weak;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

struct PakState {
    pak: popcap_pak::Pak<'static>,

    /// Speed up lookups for name into idx
    entry_path_idx_mapper: HashMap<Vec<u8>, Option<usize>>,
}

impl PakState {
    /// Get the entry index by path
    fn get_entry_idx_by_path(&mut self, path: Vec<u8>) -> Option<usize> {
        match self.entry_path_idx_mapper.entry(path.clone()) {
            HashMapEntry::Occupied(entry) => *entry.get(),
            HashMapEntry::Vacant(entry) => {
                let maybe_idx = self
                    .pak
                    .entries
                    .iter()
                    .position(|entry| entry.path() == path);
                entry.insert(maybe_idx);
                maybe_idx
            }
        }
    }
}

#[wasm_bindgen]
pub struct Pak {
    state: Rc<RefCell<PakState>>,

    /// Maps paths into entries.
    entry_path_mapper: HashMap<Vec<u8>, Weak<EntryState>>,
}

#[wasm_bindgen]
impl Pak {
    /// Make a new Pak.
    #[wasm_bindgen(constructor)]
    pub fn new(file: &JsValue) -> Result<Pak, JsError> {
        if file.is_undefined() {
            return Ok(Self {
                state: Rc::new(RefCell::new(PakState {
                    pak: popcap_pak::Pak::new(),

                    entry_path_idx_mapper: HashMap::new(),
                })),

                entry_path_mapper: HashMap::new(),
            });
        }

        if let Some(arraybuffer) = file.dyn_ref::<ArrayBuffer>() {
            let array = Uint8Array::new(arraybuffer).to_vec();
            let pak = popcap_pak::Pak::from_read(array.as_slice())
                .map_err(|e| JsError::new(&e.to_string()))?;
            return Ok(Self {
                state: Rc::new(RefCell::new(PakState {
                    pak,

                    entry_path_idx_mapper: HashMap::new(),
                })),
                entry_path_mapper: HashMap::new(),
            });
        }

        Err(JsError::new("invalid arguments"))
    }

    #[wasm_bindgen(getter)]
    pub fn length(&self) -> usize {
        self.state.borrow().pak.entries.len()
    }

    #[wasm_bindgen]
    pub fn entry(&mut self, index: usize) -> JsValue {
        match self.state.borrow().pak.entries.get(index) {
            Some(entry) => {
                let entry_path = entry.path();
                let state = match self.entry_path_mapper.entry(entry_path.to_vec()) {
                    HashMapEntry::Vacant(entry) => {
                        // Create a new state
                        let state = Rc::new(EntryState {
                            path: entry_path.to_vec(),
                            deleted: false,
                        });

                        entry.insert(Rc::downgrade(&state));

                        state
                    }
                    HashMapEntry::Occupied(mut entry) => {
                        let weak_state = entry.get();
                        let state = match weak_state.upgrade() {
                            Some(state) => state,
                            None => {
                                let state = Rc::new(EntryState {
                                    path: entry_path.to_vec(),
                                    deleted: false,
                                });

                                entry.insert(Rc::downgrade(&state));

                                state
                            }
                        };

                        state
                    }
                };

                let entry = Entry {
                    pak_state: self.state.clone(),
                    state,
                };
                entry.into()
            }
            None => JsValue::UNDEFINED,
        }
    }
}

struct EntryState {
    /// The path
    path: Vec<u8>,

    /// Whether this was deleted
    deleted: bool,
}

#[wasm_bindgen]
pub struct Entry {
    pak_state: Rc<RefCell<PakState>>,

    state: Rc<EntryState>,
}

impl Entry {
    fn path_raw_ref(&self) -> &[u8] {
        &self.state.path
    }

    fn access_entry<F, T>(&self, func: F) -> Result<T, JsError>
    where
        F: FnOnce(&popcap_pak::Entry) -> T,
    {
        if self.state.deleted {
            return Err(JsError::new("entry deleted from PAK file"));
        }

        let mut pak_state = self.pak_state.borrow_mut();
        let entry_idx = pak_state
            .get_entry_idx_by_path(self.path_raw())
            .ok_or(JsError::new("failed to locate entry in PAK file"))?;
        let entry = pak_state
            .pak
            .entries
            .get(entry_idx)
            .ok_or(JsError::new("internal bug"))?;
        Ok(func(entry))
    }
}

#[wasm_bindgen]
impl Entry {
    pub fn path_raw(&self) -> Vec<u8> {
        self.path_raw_ref().into()
    }

    pub fn path(&self) -> Result<String, JsError> {
        std::str::from_utf8(self.path_raw_ref())
            .map(|s| s.into())
            .map_err(|e| JsError::new(&e.to_string()))
    }

    pub fn path_lossy(&self) -> String {
        String::from_utf8_lossy(self.path_raw_ref()).into()
    }

    pub fn name_raw(&self) -> Result<Vec<u8>, JsError> {
        self.access_entry(|entry| entry.name().to_vec())
    }

    pub fn name(&self) -> Result<String, JsError> {
        String::from_utf8(self.name_raw()?).map_err(|e| JsError::new(&e.to_string()))
    }

    pub fn name_lossy(&self) -> Result<String, JsError> {
        Ok(String::from_utf8_lossy(&self.name_raw()?).into())
    }

    #[wasm_bindgen(js_name = "readFileData")]
    pub fn read_file_data(&self) -> Result<Vec<u8>, JsError> {
        self.access_entry(|entry| entry.iter_data().collect())
    }
}
