new Uint8Array(4);
new Int16Array(6);
new Int32Array(1024);
const v15 = Uint8Array - Uint8Array;
function f16() {
    return Uint8Array;
}
function* f17(a18, a19, a20, a21) {
    Object.defineProperty(a19, 4, { writable: true, configurable: true, enumerable: true, get: f16, set: f16 });
    yield* a21;
    return a21;
}
f17(v15, "bigint", Infinity, 1024);
