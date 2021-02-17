import { State } from 'wasm';

const state = State.new();

document.querySelector("#increment").addEventListener("click", () => {
    document.querySelector("#counter").textContent = state.increment();
})
document.querySelector("#decrement").addEventListener("click", () => {
    document.querySelector("#counter").textContent = state.decrement();
})
