function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 536870889;
    this.b = 536870889;
    this.e = 536870889;
}
let v3 = new F0();
new F0();
const v5 = new F0();
v5[6];
function f16(a17) {
    return "object";
}
class C18 extends f16 {
    static ["object"];
    [-2.2250738585072014e-308] = "number";
    static 1000;
}
v3 = C18;
