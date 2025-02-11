function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -4294967295;
    this.g = -4294967295;
    this.c = -4294967295;
}
new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    static o(a8, a9) {
        a9.g %= a9;
        return this;
    }
    b = v5;
    d = v4;
    static #h;
    g = v4;
}
new C6();
new C6();
const v15 = new C6();
function f19(a20) {
    return 4294967295;
}
class C21 extends f19 {
    d;
    [-44718] = v15;
}
C6.d;
