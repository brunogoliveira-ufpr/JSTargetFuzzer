function f3(a4, a5) {
    const o13 = {
        "a": a4,
        __proto__: a5,
        "b": -128,
        6: a4,
        "g": a5,
        set d(a7) {
            a7?.e;
            super.e;
        },
    };
    return o13;
}
const v14 = f3(1, 1);
const v15 = f3(-11, -128);
f3(-11, -11);
class C20 extends f3 {
    13;
    static b = f3;
    static 8;
    #toString(a22, a23, a24, a25) {
        432025537 >= a22 ? 432025537 : a22;
        return 432025537;
    }
    static a = -4294967295;
    static f = v15;
    h = 1;
    #f;
}
const v28 = new C20();
const v29 = new C20();
new C20();
function f31(a32, a33, a34) {
    a34[4] = C20;
    const t35 = -11;
    t35[6] = C20;
    return 1000;
}
const v35 = f31(v29, v29, v28);
f3(-11, 1000);
const v38 = -4294967295 || f3(v35, v14);
v38[v38] &&= 432025537;
