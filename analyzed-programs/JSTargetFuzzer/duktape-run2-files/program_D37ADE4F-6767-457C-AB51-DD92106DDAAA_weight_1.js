let v0 = "boolean";
class C3 {
    static #toString(a5) {
        v0 = this;
        const t3 = "n";
        t3[super.d] = a5;
        return a5;
    }
    #a = 268435456;
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a16;
    this.a = v11;
}
const v19 = new F13(C3, v12, v11, v11);
const v20 = new F13(v19, v11, v19, v11);
new F13(C3, v19, v10, v20);
const v23 = Symbol.toPrimitive;
const o35 = {
    [v23]() {
        let [v25,v26] = "n";
        let v30 = v23 / v25;
        const v31 = --v30;
        Math.abs(v23);
        !v31;
        v23 / v30;
        return 268435456;
    },
};
