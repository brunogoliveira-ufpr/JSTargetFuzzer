function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 65535;
    this.f = 65535;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    static #o(a8) {
        const v9 = this === this;
        if (v9) {
            v5[this] = v9;
        } else {
        }
        return this;
    }
    static [F0];
}
const v14 = new C6();
new C6();
new C6();
const v24 = ("sin")["trim"]();
const o25 = {
    "d": -7880,
    ...v3,
    "a": v14,
    "b": v4,
};
v3[5] ||= 4294967297;
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a28;
}
new F26(4, 4);
new F26(-7880, v24);
new F26(4294967297, 4294967297);
