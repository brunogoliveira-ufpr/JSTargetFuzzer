function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.h = f0;
    this.f = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6() {
    return v5;
}
class C10 {
    h = v5;
    get f() {
        function f12() {
            return this;
        }
        return this;
    }
    static set e(a14) {
        this / this;
    }
}
new C10();
new C10();
const v21 = new C10();
v21 instanceof f0;
v3.e = v4.h;
const v25 = Symbol.toPrimitive;
const o30 = {
    [v25]() {
        return 64;
    },
};
