function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1;
    this.f = -1;
}
new F0();
new F0();
const v5 = new F0();
const v7 = new Map();
new Int32Array(16);
new Int16Array(2494);
new BigInt64Array(0);
switch (2494) {
    default:
        break;
}
v7.size &&= 2.2250738585072014e-308;
v5[-1.7976931348623157e+308];
