function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 4294967296;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    get h() {
        const v8 = super.h;
        this * this;
        return v8;
    }
    static {
        v4[4294967295];
    }
    a;
    static e;
    static 156 = v5;
    #d = v4;
}
const v12 = new C6();
const v13 = new C6();
const v14 = new C6();
const v15 = [v14,C6,v14,v5];
[v3,C6,v14];
const v17 = [v14,v15,F0,v3];
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v17;
}
const v24 = new F18(v3, v14, v3, v12);
const v25 = new F18(v13, v5, v14, v14);
const v26 = new F18(v4, v12, v4, v3);
let v27;
try { v27 = v25.fromCharCode(v5, v26); } catch (e) {}
C6.toString = v27;
v14.a >>= v27;
const o28 = {
    __proto__: v24,
    "h": v17,
    "e": v14,
    ...v26,
};
