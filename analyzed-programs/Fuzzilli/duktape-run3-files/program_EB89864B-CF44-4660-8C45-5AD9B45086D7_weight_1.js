const v5 = new Float64Array(7);
new Uint8ClampedArray(8);
const v11 = new BigInt64Array(256);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a17;
}
const v18 = new F12(7, 8, 7, F12);
new F12(7, 7, 7, v18);
const v20 = new F12(256, 256, 8, v5);
v20.a;
const o22 = {
    "h": 7,
    __proto__: v11,
    "e": 256,
    ...v18,
    ...v11,
};
5n >= o22 ? 5n : o22;
