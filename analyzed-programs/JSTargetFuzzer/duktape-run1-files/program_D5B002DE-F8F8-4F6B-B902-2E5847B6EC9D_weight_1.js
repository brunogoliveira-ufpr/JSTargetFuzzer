function f6(a7, a8, a9, a10) {
    const o23 = {
        __proto__: a8,
        [a8]: -42119372,
        [a7]: 64,
        "e": 9007199254740991,
        "d": a7,
        "b": a9,
        [a7](a12, a13, a14, a15) {
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = a18;
            }
            new F16(a13, -2);
            new F16(2060461571, a9);
            new F16(-42119372, a12);
            return a8;
        },
    };
    return o23;
}
const v25 = f6(64, f6(-42119372, 2147483648, 2060461571, -42119372), 64, 2060461571);
const v26 = f6(2060461571, v25, 9007199254740991, 2147483648);
function f27() {
    return 64;
}
new Uint8ClampedArray(8);
new Uint8ClampedArray(6);
const v36 = new Int8Array(10);
try { v36.join(v26); } catch (e) {}
const o38 = {
};
new Proxy(Int8Array, o38);
const v42 = Symbol.isConcatSpreadable;
v25[v42] = v42;
