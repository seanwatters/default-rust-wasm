import * as wasm from './my_project_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

/**
*/
export class State {

    static __wrap(ptr) {
        const obj = Object.create(State.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_state_free(ptr);
    }
    /**
    * @returns {State}
    */
    static new() {
        var ret = wasm.state_new();
        return State.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    increment() {
        var ret = wasm.state_increment(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    decrement() {
        var ret = wasm.state_decrement(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_counter() {
        var ret = wasm.state_get_counter(this.ptr);
        return ret;
    }
}

export const __wbg_alert_d58b478aa3b636c6 = function(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

