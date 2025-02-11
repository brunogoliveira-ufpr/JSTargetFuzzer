function f0() {
    const o4 = {
        "f": 13,
        ["repeat"]: "values",
        2: "values",
        268435440: "repeat",
        "e": "repeat",
        "c": "values",
        "g": "values",
        "a": "repeat",
        ..."repeat",
        "b": "repeat",
        7: "values",
        "d": "repeat",
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
function f8(a9) {
    const o14 = {
        2147483647: v6,
        get d() {
            v5.a &&= 65536;
            return a9;
        },
        ...a9,
        "d": a9,
        "f": a9,
        "b": v5,
    };
    return o14;
}
const v16 = f8(f8(v6));
const v17 = f8(v7);
new Uint8Array(2722);
new BigInt64Array(2490);
const v26 = new Uint8ClampedArray(16);
const o30 = {
    __proto__: v16,
    "h": Uint8ClampedArray,
    "c": f0,
    ...v17,
};
v26[0] = Infinity;
