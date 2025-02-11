function f3(a4, a5) {
    const o11 = {
        set a(a7) {
        },
        "a": a5,
        "b": a5,
        ...a4,
        "h": -1n,
        ...a4,
        "d": -1n,
        __proto__: a4,
    };
    return o11;
}
const v12 = f3(f3, -1n);
const v14 = f3(f3(64n, -1n), 64n);
class C18 extends f3 {
    n(a20, a21) {
        new Map();
        return f3;
    }
    static #g = 6n;
    static 0;
    [6n];
    static #a;
}
new C18();
const v28 = new C18();
const v29 = new C18();
let v30 = v14[v29];
try { v30(v14, v30, v12, v14); } catch (e) {}
[0.055110229076555495,453.31989306553214,-5.120214118843984e+307,1000000000000.0,-2.220446049250313e-16,9.284000286594903,-560.6556132834304];
[-1000000000.0,2.0];
[870.6505200941642,NaN];
v30 = v29;
v28.h = v29;
