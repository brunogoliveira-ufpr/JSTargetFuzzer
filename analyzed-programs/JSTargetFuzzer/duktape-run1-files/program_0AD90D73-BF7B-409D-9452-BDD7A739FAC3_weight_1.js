function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o16 = {
        [a7](a10, a11, a12) {
            a11[253] = a8;
            [F0];
            [a11,v5,[a8]];
            return a8;
        },
        "c": v5,
        "b": v3,
        [v4]: v5,
        [a8]: a8,
    };
    return o16;
}
const v17 = f6(v3, v5);
const v18 = f6(v5, v5);
f6(v5, v5);
new Int8Array(241);
new BigInt64Array(2801);
new Uint16Array(1327);
let o29 = {
};
new Proxy(Uint16Array, o29);
const v32 = (o29 = v17)[Int8Array];
new Date();
f6(v32, v3);
try { v18.o(v17); } catch (e) {}
