class C3 {
    static {
        let v5 = this - this;
        this.toString = this;
        this[2603] = v5 = 55470;
    }
    #f = 109;
    static d;
    static #e = 55470;
    #b;
    [109] = 55470;
    static #c;
}
const v6 = new C3();
const v7 = new C3();
const v8 = new C3();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 109;
    this.g = a11;
}
const v14 = new F9(v8, v6, v6);
new F9(v14, v14, C3);
const v16 = new F9(109, v6, v7);
function f17() {
    return C3;
}
const v18 = f17();
const v19 = 109 ^ v18;
const o23 = {
    __proto__: v7,
    "c": F9,
};
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a28;
    this.c = C3;
    this.a = a27;
}
new F24(37748n, v18, 55470);
new F24(9223372036854775807n, v16, v19);
new F24(16n, v7, 55470);
