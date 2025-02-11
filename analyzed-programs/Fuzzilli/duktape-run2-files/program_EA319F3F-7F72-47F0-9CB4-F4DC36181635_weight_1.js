const v0 = [];
function f1() {
    return v0;
}
function f2(a3) {
    const o4 = {
        "f": f1,
        8: f1,
        [f1]: a3,
        "d": f1,
        "e": v0,
        "h": a3,
        "a": a3,
        __proto__: a3,
        "g": v0,
        "b": v0,
        [a3]: a3,
        "c": f1,
    };
    return o4;
}
const v5 = f2(f1);
f2(v5);
f2(f1);
new Uint8ClampedArray(129);
new BigUint64Array(954);
const v16 = new BigInt64Array(15);
v16[Symbol.isConcatSpreadable];
const o21 = {
    "get": f2,
    "isExtensible": f2,
};
new Proxy(v5, o21);
