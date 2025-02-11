let v2 = new Uint32Array(0);
const v5 = new Float64Array(1000);
let v6 = 66;
let v7 = BigUint64Array;
const v8 = new v7(v6);
function f9(a10, a11) {
    const o19 = {
        "d": a11,
        __proto__: v2,
        [v5](a13, a14) {
            let v15 = a14 / a11;
            try { v2.some(this, v6); } catch (e) {}
            let {"byteLength":v17,} = v2;
            new Uint32Array(a10, v17);
            ({"byteLength":v2,"byteOffset":v7,"length":v15,...v6} = v5);
            return Float64Array;
        },
        "b": 1000,
        "f": v7,
        ...v8,
    };
    return o19;
}
const v20 = f9(0, v2);
const v21 = f9(1000, v2);
const v22 = f9(1000, 1000);
function* f23(a24, a25, a26, a27) {
    v22.d;
    yield* v2;
    return a26;
}
v2 - f23(v21, v21, v20, v20);
