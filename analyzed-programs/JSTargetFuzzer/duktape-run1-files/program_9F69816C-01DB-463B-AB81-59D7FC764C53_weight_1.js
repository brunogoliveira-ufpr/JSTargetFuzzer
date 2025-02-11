const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v0;
    this.c = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
class C6 {
    static a;
    2147483649;
    static g = F1;
    static #valueOf(a8) {
        v3 !== v5;
        return "9007199254740990";
    }
    constructor(a14, a15) {
        const v21 = -1.0 >>> -1806586263;
        -1.0 & a15;
        v5 - v21;
    }
}
const v24 = new C6(v4, v5);
const v25 = new C6(v5, v4);
const v26 = new C6(v24, v3);
function f27(a28, a29) {
    const o40 = {
        ...a28,
        __proto__: v0,
        ...a28,
        2: C6,
        "c": C6,
        [v5](a31, a32) {
            function f33(a34, a35) {
                const o36 = {
                    __proto__: a31,
                    1073741825: a29,
                };
                return o36;
            }
            f33(a28, v4);
            f33(a29, C6);
            f33(v4, a31);
            return v24;
        },
    };
    return o40;
}
const v42 = f27(v3, f27(v3, C6));
f27(v42, v42);
function F44(a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v42;
    this.a = a46;
    this.g = v26;
}
new F44(v4, v3);
const v49 = new F44(v5, v26);
const v50 = new F44(v49, v25);
v50.g;
let v53 = 3;
let v54 = 1;
const v55 = !v24;
F44 << v55;
Math.trunc(!v55);
v54--;
--v53;
