function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -38523;
    this.g = -38523;
    this.a = -38523;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C9 extends F0 {
    static set h(a11) {
        this[Symbol.iterator] = -4294967295;
    }
    o(a15, a16, a17, a18) {
        let v20;
        try { v20 = this["bind"](v3); } catch (e) {}
        function F21(a23, a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = -2147483648;
        }
        new F21(v20, -2147483648, v4, this);
        new F21(a17, -2147483648, a17, v3);
        new F21(v3, v20, a17, v5);
        return a18;
    }
}
const v30 = new C9();
const v31 = new C9();
const v32 = new C9();
let v34;
try { v34 = new C9(FinalizationRegistry, ...FinalizationRegistry, ...FinalizationRegistry, -2147483648, C9); } catch (e) {}
for (let v35 = 0; v35 < 43; v35++) {
    let v36;
    try { v36 = v34(v5, v30, v35); } catch (e) {}
    try { new FinalizationRegistry(...FinalizationRegistry, v35, v36, v5); } catch (e) {}
}
v3 ||= v32;
v31[-2147483648];
const o39 = {
};
new Proxy(C9, o39);
