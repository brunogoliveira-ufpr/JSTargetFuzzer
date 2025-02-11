function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4294967297;
    this.f = 4294967297;
    this.c = 4294967297;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    static [-1] = v4;
    static {
        new Uint16Array(4096);
        new Int32Array(64);
        new Int16Array(4096);
    }
    #f;
    [-1] = v5;
    #h = v4;
}
const v17 = new C6();
new C6();
const v19 = new C6();
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v5;
}
const v25 = new F20(v5, v17, v5);
const v26 = new F20(v25, v19, v3);
const v27 = new F20(C6, v5, v5);
function f28(a29, a30, a31, a32) {
    const o40 = {
        "d": v3,
        "g": a30,
        get h() {
            let v33 = this;
            v33 **= v33;
            try {
                super.trimEnd(a32);
            } catch(e35) {
            }
            return v5;
        },
        o(a37, a38) {
            let v36 = this;
            super.c = v5;
            try { v26.m(a37, v4); } catch (e) {}
            v36 *= a30;
            return a31;
        },
    };
    return o40;
}
const v42 = f28(v19, f28(v19, v5, v4, v26), v25, v19);
f28(v17, v42, v27, F0);
Object.defineProperty(v4, "e", { value: v19 });
v26.f;
v25[v5[v4]] = v3;
new WeakSet();
const v49 = v27.__proto__;
try { v49(F20, v49, v49, v42); } catch (e) {}
new Map();
