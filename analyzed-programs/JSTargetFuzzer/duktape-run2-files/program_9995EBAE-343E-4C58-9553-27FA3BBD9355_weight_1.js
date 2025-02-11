class C3 {
    valueOf(a5, a6) {
        a5.e = this;
        return 3;
    }
    static 2147483648;
    constructor(a8, a9) {
        const v10 = delete a8?.[7];
        const v11 = ("callee")[119496230];
        const v12 = v11?.[9];
        try { v12(v11, v10, v12, a9, 3); } catch (e) {}
    }
}
const v17 = new C3(3, "callee");
const v18 = new C3(v17, v17);
const v19 = new C3(v18, v18);
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a24;
}
const v26 = new F20(C3, v19, v19, v19);
const v27 = new F20(v17, v18, v26, v26);
const v28 = new F20(v18, v27, v17, v27);
class C29 extends C3 {
    constructor(a31, a32, a33, a34) {
        super(a33, a31);
        try { a33.toUTCString(a34); } catch (e) {}
        a32[Symbol.isConcatSpreadable] = v27;
    }
    [2.220446049250313e-16] = v28;
    static #d = 2.220446049250313e-16;
    a;
    static 64 = F20;
}
const v41 = new C29(v19, v27, F20, v17);
new C29(v41, v41, v27, C29);
const v43 = new C29(v18, v27, v27, v28);
new F20(v43, v41, v41, v19);
function f45(a46, a47, a48, a49) {
    'use strict';
    const v54 = v17 >>> v28;
    Math.asinh(v54);
    Math.asinh(1000);
    Math.sinh(v28);
    Math.tanh(v54);
    return C3;
}
f45(v26, v43, C29, v17);
