new Int8Array(10);
new Int16Array(10);
new Uint32Array(7, Int16Array, Int8Array);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.g = -65537;
}
new F12();
const v16 = new F12();
const v17 = new F12();
const o24 = {
    3: 10,
    __proto__: v17,
};
o24[Infinity] = Infinity;
v17[v16.a];
