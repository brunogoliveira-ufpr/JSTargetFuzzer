new Int32Array(7);
const v5 = new Int16Array(2181);
new Int8Array(126);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.g = -65537;
}
new F12();
new F12();
const v17 = new F12();
const o24 = {
    3: 536870889,
    __proto__: v5,
};
o24[Infinity] = Infinity;
v17[v17.a];
