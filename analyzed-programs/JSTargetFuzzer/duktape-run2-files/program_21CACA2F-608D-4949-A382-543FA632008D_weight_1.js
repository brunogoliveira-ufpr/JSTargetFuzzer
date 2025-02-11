new BigUint64Array(3);
const v5 = new Float64Array(9);
new Uint32Array(133);
function f9(a10, a11, a12, a13) {
    const o21 = {
        [a10](a15, a16, a17) {
            return v5;
        },
        9: a11,
        "h": 9,
        "f": a12,
        "c": a13,
    };
    return o21;
}
const v22 = f9(133, 3, 133, v5);
const v23 = f9(9, 9, 9, v22);
f9(9, 9, 3, Float64Array);
Object.defineProperty(v23, 133, { writable: true, configurable: true, enumerable: true, get: f9 });
v22 != f9;
try {
    const o26 = {
        "apply": f9,
        "call": f9,
        "construct": f9,
        "deleteProperty": f9,
        "get": f9,
        "getPrototypeOf": f9,
        "has": f9,
        "ownKeys": f9,
        "set": f9,
    };
    new Proxy(v22, o26);
} catch(e29) {
    e29 & e29;
}
