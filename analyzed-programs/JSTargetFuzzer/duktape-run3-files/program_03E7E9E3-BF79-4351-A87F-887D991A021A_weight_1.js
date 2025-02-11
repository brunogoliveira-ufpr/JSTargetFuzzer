const v2 = new Uint8ClampedArray(12);
const v5 = new BigInt64Array(129);
const v8 = new Uint32Array(3284);
function f9(a10, a11, a12, a13) {
    const o14 = {
        ...v8,
        __proto__: v5,
        "d": 3284,
        "b": BigInt64Array,
        "f": 3284,
        ...v2,
        "e": 12,
        ...v2,
        "c": a13,
        "a": 12,
        [12]: v2,
        "h": Uint32Array,
        "g": Uint8ClampedArray,
        [Uint8ClampedArray]: v5,
    };
    return o14;
}
f9(129, 12, 129, 129);
f9(12, 129, 3284, 3284);
const v17 = f9(129, 129, 129, 12);
v2[3] = 129;
function f21(a22, a23) {
    new Uint16Array(2);
    new BigInt64Array(209);
    new Float32Array(0);
    return BigInt64Array;
}
f21(v17, v17);
