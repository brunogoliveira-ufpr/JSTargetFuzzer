new Int32Array(179);
new Int32Array(4096);
new Float32Array(16);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.g = -65537;
}
const v18 = new F15();
new F15();
const v20 = new F15();
const o27 = {
    3: 536870889,
    __proto__: v18,
};
o27[Infinity] = Infinity;
v20[v20.a];
