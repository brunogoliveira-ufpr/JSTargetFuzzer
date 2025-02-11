new Float32Array(1712);
const v5 = new Uint32Array(3020);
new Uint8Array(135);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Uint32Array;
}
const v14 = new F9(135, 135, v5);
const v15 = new F9(v14, 135, Float32Array);
const v16 = new F9(v15, 135, 1712);
function F17() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 135;
    this.g = -65537;
}
const v20 = new F17();
let v21 = new F17();
const v22 = new F17();
{
    v21 &&= v21;
    const v28 = Symbol.species;
    v16[v28] = v28;
    try { v16.create(); } catch (e) {}
    v14[1712] = v16;
    try { v14.p(); } catch (e) {}
}
for (let v31 = 0; v31 < 32; v31++) {
    v5["p" + v31] = v31;
}
const o36 = {
    3: 536870889,
    __proto__: v20,
};
o36[Infinity] = Infinity;
v22[o36.a];
