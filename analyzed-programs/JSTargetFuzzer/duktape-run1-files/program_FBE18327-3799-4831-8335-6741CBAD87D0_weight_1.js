function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -2;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
class C10 {
    static {
        new WeakMap();
    }
    set g(a15) {
        this[5];
        v4[this];
    }
    65535 = v4;
    static #h = v4;
    static 536870887;
    static [F0];
}
new C10();
new C10();
const v20 = new C10();
let [,v21] = "callee";
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "512";
}
new F22(v21, C10);
new F22(v4, C10);
new F22(v5, v21);
v20[Symbol.replace] = f6;
