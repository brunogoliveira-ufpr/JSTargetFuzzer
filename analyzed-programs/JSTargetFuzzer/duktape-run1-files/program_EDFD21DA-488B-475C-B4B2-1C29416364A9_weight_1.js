function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -3;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a19;
}
new F16(1343350558, "-10", v5);
new F16(9007199254740992, "-10", v4);
const v23 = new F16(8, "o", v4);
v23[4096] ||= -56166;
class C24 extends F0 {
    static h;
    ["-10"] = -6;
    [-6];
    [9007199254740992] = "cosh";
}
new C24();
new C24();
new C24();
