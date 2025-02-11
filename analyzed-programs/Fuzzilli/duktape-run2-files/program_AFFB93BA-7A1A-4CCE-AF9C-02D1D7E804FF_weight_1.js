function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 13;
    this.f = 13;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    c;
    static b;
    536870887 = v4;
    [v3];
    o(a8, a9) {
        v5[4133670695];
        try {
            super.o(a8, F0, v4, a8);
        } catch(e12) {
        }
        return this;
    }
}
const v13 = new C6();
new C6();
const v15 = new C6();
class C16 {
    static #f;
    o(a18, a19, a20) {
        v13[3];
        try {
            this.#f |= this;
        } catch(e23) {
        }
        return v4;
    }
    static [C6] = v13;
}
new C16();
const v25 = new C16();
new C16();
const v28 = Symbol.toStringTag;
v4[v28] = v28;
v25.valueOf = "deleteProperty";
const v32 = v15.d;
const o33 = {
};
new Proxy(v32, o33);
