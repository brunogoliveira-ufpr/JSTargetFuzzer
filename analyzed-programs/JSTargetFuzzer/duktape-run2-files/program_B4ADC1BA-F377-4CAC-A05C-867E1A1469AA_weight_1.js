function F7() {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F7();
Array(10);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = new F13(v9, F13, v9);
const v19 = new F13(F7, v18, -4.383871687669162e+307);
const v20 = new F13(v18, v19, F13);
v20[F7] = Array;
F7 >>> v9;
Object.defineProperty(v19, 1923, { get: Array, set: Array });
Object.defineProperty(v9, 1024, { enumerable: true, value: v18 });
function f25() {
    const o29 = {
        ["b"]: "b",
        "d": 14,
        __proto__: "d",
        "e": 14,
        [14]: 1.0,
        [v20]: "b",
        "f": 1073741823,
        "b": "b",
        "g": "b",
        "h": 14,
    };
    return o29;
}
f25();
const v31 = f25();
const v32 = Array();
(-4.383871687669162e+307)[16];
const t30 = "localeCompare";
t30[2147483648] = "DBBG0";
for (let v40 = 0; v40 < 91; v40++) {
    const v42 = Symbol.species;
    v31[v42] = v42;
}
for (let v43 = 0; v43 < 32; v43++) {
    v32["p" + v43] = v43;
}
