function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.a = f0;
    this.c = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a14;
}
new F10(v5, "1073741825", v5);
new F10(v4, "atan", v5);
new F10(v3, "f", v4);
v4[v3] += "atan";
new f0();
const v20 = Symbol.toPrimitive;
const o25 = {
    [v20]() {
        [2.2228233671523098e+307,-1.34579884553825e+308,4.0];
        [2.0,5.783866551694097e+307,0.9111349931816846,-4.0];
        [-178619.76784724183,1.7976931348623157e+308,-Infinity];
        return "f";
    },
};
