const v0 = [];
function f1() {
    const o8 = {
        get c() {
            let [v3,,v4,v5] = v0;
            delete v0[65537];
            super.e;
            return v0;
        },
        "c": v0,
        __proto__: v0,
        "f": v0,
        "h": v0,
        "e": v0,
    };
    return o8;
}
const v9 = f1();
const v10 = f1();
const v11 = f1();
function f12() {
    return v9;
}
class C16 extends f1 {
    constructor(a18, a19) {
        super();
        Object.defineProperty(v11, v11, { configurable: true, get: f1, set: f1 });
        v0.valueOf = f1;
    }
    [-9];
    static #c = v10;
    #g = v11;
}
new C16(f12, -9223372036854775808);
new C16(C16, 0);
const v25 = new C16(v11, 0);
Math.imul(f12, f12);
const v30 = Math.tanh(31249);
const v31 = 2.220446049250313e-16 ** 31249;
v31 === -9 ? v31 : -9;
const v34 = C16[v30];
try { v25.atan(C16, -9223372036854775808, v34, 2.220446049250313e-16); } catch (e) {}
