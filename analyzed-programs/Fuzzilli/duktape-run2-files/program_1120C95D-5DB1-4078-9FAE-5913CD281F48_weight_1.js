const v2 = new BigInt64Array(3733);
new Uint32Array(3229);
const v8 = new Int8Array(255);
function f9(a10, a11, a12) {
    const o13 = {
        "c": Uint32Array,
        [255]: a10,
        65535: a10,
        [a11]: 255,
        129: v8,
        ...v2,
        "a": v8,
        "d": a12,
        "b": Uint32Array,
        "g": a11,
        "f": a10,
    };
    return o13;
}
f9(3733, 255, 255);
f9(3229, 3733, 255);
const v16 = f9(255, 255, 3229);
class C17 extends BigInt64Array {
    [v16];
}
const v18 = new C17();
const v19 = new C17();
new C17();
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a24;
    this.b = a23;
    this.a = a25;
}
new F21(v18, v18, v2);
new F21(v8, v19, v2);
new F21(Int8Array, v2, v2);
