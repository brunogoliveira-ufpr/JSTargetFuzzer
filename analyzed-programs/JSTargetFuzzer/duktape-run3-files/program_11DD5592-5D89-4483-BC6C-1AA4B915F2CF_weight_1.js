function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.b = "n";
    this.g = a5;
}
const v7 = new F3("n", "n");
const v8 = new F3("1073741823", "-1525483121");
const v9 = new F3("-1525483121", v7);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a13;
    this.__proto__ = a13;
    this.sticky = "1073741823";
}
new F10(v9, v7, "-1525483121");
new F10(v8, v7, v7);
new F10(v8, v9, v7);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.g = -65537;
}
const v24 = new F21();
new F21();
const v26 = new F21();
const o33 = {
    3: 536870889,
    __proto__: v24,
};
o33[Infinity] = Infinity;
v26[v26.a];
