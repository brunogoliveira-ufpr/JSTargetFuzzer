function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "5";
    this.d = a5;
    this.e = "5";
}
new F3("function");
const v7 = new F3("number");
const v8 = new F3("5");
class C9 extends F3 {
    static ["number"] = "function";
    valueOf(a11, a12, a13, a14) {
        v8[v7] = v8;
        return F3;
    }
    static {
        for (let i18 = 0, i19 = 10; i18 < i19; i18++, i19--) {
            v8[2] -= i19;
            const t18 = "number";
            t18["5"] = i18;
        }
    }
}
const v27 = new C9();
new C9();
const v29 = new C9();
const o30 = {
};
new Proxy(F3, o30);
const v33 = C9 - v29;
v27[Proxy] = v33;
v8[4] *= v33;
