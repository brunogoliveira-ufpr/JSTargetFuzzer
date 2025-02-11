class C3 {
    static #a = "65536";
    constructor(a5, a6) {
        try {
            this.#a = this;
        } catch(e7) {
        }
        try { a6("boolean"); } catch (e) {}
    }
    c = -8;
}
const v12 = new C3(-8, -8);
let v13 = new C3(-8, -8);
const v14 = new C3(v13, "65536");
function f15(a16, a17, a18, a19) {
    const o33 = {
        536870912: a19,
        __proto__: a16,
        [a16](a21, a22, a23, a24) {
            Math.tan(1.7976931348623157e+308);
            Math.cbrt(a23);
            const v30 = Math.sin(3);
            1.7976931348623157e+308 / a17;
            a23 | a17;
            return v30;
        },
    };
    return o33;
}
f15(v12, v13, C3, v13);
const v35 = f15(v14, v13, C3, C3);
f15(v13, v35, v13, v35);
function f38(a39, a40, a41) {
    a40.d = ++a39;
    const v43 = "65536" >>> -8;
    a40[v43] = v43;
    return v35;
}
f38(v12, "65536", v35);
--v13;
Math.expm1(false);
Math.round(941);
Math.pow(-1, false);
Math.log1p(false);
