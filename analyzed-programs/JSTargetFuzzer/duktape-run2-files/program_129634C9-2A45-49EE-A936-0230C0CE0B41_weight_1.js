function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -7185;
}
const v3 = new F0();
new F0();
new F0();
new Uint8ClampedArray(4096);
let v9 = 5;
new BigUint64Array(v9);
const v14 = new BigUint64Array(16);
let v21 = v14 ** -1.7976931348623157e+308;
Math.random();
v21++;
let v24 = "isSealed";
let v25;
try { v25 = v3[v24](); } catch (e) {}
v9 = v25;
v24 = v25;
