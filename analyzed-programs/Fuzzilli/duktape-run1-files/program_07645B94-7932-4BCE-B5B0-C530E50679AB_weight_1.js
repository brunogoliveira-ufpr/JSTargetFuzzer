class C3 {
    o(a5) {
        this.a *= a5;
        try { this.catch(this, a5); } catch (e) {}
        return a5;
    }
    static set a(a8) {
        try { new a8(); } catch (e) {}
        a8.d *= 257;
    }
    [6] = 257;
    f = 257;
}
new C3();
const v14 = new C3();
const v15 = new C3();
function f16() {
    return v15;
}
const v18 = new Map();
class C19 extends f16 {
    static [v18];
    static #p(a21, a22, a23, a24) {
        Object.defineProperty(v14, 7, { configurable: true, get: f16, set: f16 });
        v15[3] <<= 536870889;
        return a21;
    }
    constructor(a29, a30, a31) {
        super();
        Object.defineProperty(a31, "f", { writable: true, enumerable: true, get: f16 });
        try { this.o(C3); } catch (e) {}
    }
}
const v33 = new C19(v14, v15, v15);
const v34 = new C19(C19, v15, v33);
new C19(v33, v15, v34);
let v39 = 0;
do {
    C19.e;
    v39++;
} while (v39 < 3)
