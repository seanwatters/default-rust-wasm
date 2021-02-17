use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct State {
  counter: i32
}

#[wasm_bindgen]
impl State {
    pub fn new() -> State {
        let counter = 0;

        State {
            counter,
        }
    }

    pub fn increment(&mut self) -> i32 {
        self.counter = self.counter + 1;
        self.counter
    }

    pub fn decrement(&mut self) -> i32 {
        self.counter = self.counter - 1;
        self.counter
    }

    pub fn get_counter(&self) -> i32 {
        self.counter
    }
}
