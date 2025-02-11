const v0 = /(?:a{5,1000000}){3,1000000}+/ums;
const v1 = /(?:foo)*/dviys;
let v2 = /H0EO((?:a*)*m(?<!)(x(?<!)))+/mviysg;
function f3(a4) {
    const o14 = {
        __proto__: a4,
        "c": a4,
        [a4]: v1,
        p(a6) {
            a4.__proto__ = a4;
            a6 / (a4 >>= a6);
            let v10 = -9007199254740992;
            --v10;
            !this;
            this >>> a4;
            return v0;
        },
    };
    return o14;
}
const v15 = f3(v0);
const v16 = f3(v2);
const v17 = f3(v0);
class C18 {
    static #g = v16;
    3;
    static get h() {
        v2 &= v1;
        function F20(a22, a23, a24, a25) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = v15;
            this.a = a23;
        }
        const v26 = new F20(v16, this, v16, v0);
        const v27 = new F20(this, v17, v15, v26);
        new F20(v17, v15, v17, v27);
        return v15;
    }
}
const v29 = new C18();
const v30 = new C18();
new C18();
function f32(a33, a34, a35, a36) {
    const o45 = {
        __proto__: a36,
        [a36]: v17,
        [v29](a38, a39) {
            try {
                super.getFloat64(a34, a33, v29);
            } catch(e44) {
            }
            return -1000.0;
        },
        "f": C18,
    };
    return o45;
}
f32(v16, v15, v16, f32(v17, v30, f32(v16, v30, v30, v1), v30));
new f3(f32, f3, f3, f32);
class C50 extends C18 {
    static [v15];
    static a = v2;
}
new C50();
new C50();
new C50();
