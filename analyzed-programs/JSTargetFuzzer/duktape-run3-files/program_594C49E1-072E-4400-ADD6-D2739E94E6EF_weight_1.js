new Uint8ClampedArray(2183);
new Float32Array(16);
new Int16Array(1507);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.g = -65537;
}
const v15 = new F12();
new F12();
const v17 = new F12();
const o24 = {
    3: 536870889,
    __proto__: v15,
};
o24[Infinity] = Infinity;
v17[v17.a];
