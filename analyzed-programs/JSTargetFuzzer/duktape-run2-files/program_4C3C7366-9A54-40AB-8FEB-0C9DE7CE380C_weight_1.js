class C3 {
    static {
        this[this] = this;
        let v5;
        try { v5 = this(this, NaN, 28954, this, this); } catch (e) {}
        try { new v5(this, v5, this); } catch (e) {}
        v5.e |= 28954;
        super.e = NaN;
    }
    constructor(a8) {
        try {
            super.m(a8);
        } catch(e10) {
        }
        this + NaN;
    }
}
new C3(28954);
new C3(0.18635570625435016);
new C3(28954);
function f24() {
    return C3;
}
C3.f = 127n;
C3 |= f24().__proto__;
