function f0() {
}
class C1 {
    valueOf() {
        return 127;
    }
    static #f;
    static [f0] = f0;
    b = f0;
    [f0] = f0;
}
const v6 = new C1();
const v7 = new C1();
const v8 = new C1();
function f9(a10, a11) {
    const o21 = {
        "h": v8,
        "d": v8,
        o(a13, a14, a15, a16) {
            f0();
            a15[this] = v8;
            for (let v18 = 0; v18 < 32; v18++) {
                a13["p" + v18] = v18;
            }
            return a16;
        },
    };
    return o21;
}
f9(v6, v7);
const v23 = f9(v7, v6);
const v24 = f9(v8, v7);
function f25(a26, a27, a28) {
    const o31 = {
        "c": a27,
        "b": v23,
        "h": a28,
        "d": a28,
        get e() {
            this.__proto__;
            return v6;
        },
        268435439: a26,
        "e": v23,
    };
    return o31;
}
f25(v8, v8, v6);
f25(v7, v8, f25(v8, v6, v8));
class C36 extends v24.constructor {
    static #g;
    static #a;
    static c;
}
const v37 = new C36();
C1.a = v37;
