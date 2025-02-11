function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.g = -65537;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const o12 = {
    3: 536870889,
    __proto__: v3,
};
o12[Infinity] = Infinity;
v5[v5.a];
