class C3 {
    static get e() {
        let v8;
        try {
        const t0 = "p";
        v8 = t0(..."p", 512, -9007199254740992, 2147483649, ..."p");
        } catch (e) {}
        v8?.a;
        const v11 = Symbol.iterator;
        const o20 = {
            [v11]() {
                let v13 = 10;
                const o19 = {
                    next() {
                        v13--;
                        const v17 = v13 == 0;
                        const o18 = {
                            "done": v17,
                            "value": v13,
                        };
                        return o18;
                    },
                };
                return o19;
            },
        };
        return o20;
    }
}
const v21 = new C3();
const v22 = new C3();
const v23 = new C3();
class C24 {
    static [C3] = "p";
    static {
        this.__proto__ = this;
    }
    static {
        let v30 = ("p").length;
        let v31 = C3 !== this;
        v31 ? C3 : this;
        const v35 = --v30;
        Math.cbrt(v30);
        Math.round(-65535);
        --v31;
        Math.expm1(v35);
    }
}
new C24();
const v41 = new C24();
const v42 = new C24();
function f43(a44, a45, a46, a47) {
    const o62 = {
        1: v42,
        "d": a45,
        [v41](a49, a50, a51, a52) {
            new Float64Array(4);
            new Int32Array(3);
            new Uint32Array(2634);
            return v42;
        },
    };
    return o62;
}
const v63 = f43(v42, C24, v41, v22);
const v64 = f43(v41, v23, v22, C24);
f43(v21, f43, v21, v21);
C24 = v42;
v42.f = v63;
v64[3] %= 64;
function f70() {
    return v63;
}
