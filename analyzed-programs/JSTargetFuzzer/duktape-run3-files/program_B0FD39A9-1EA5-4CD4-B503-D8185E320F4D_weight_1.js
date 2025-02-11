function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 536870912;
    this.a = 536870912;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    #c = v3;
    b = v4;
    static [v5];
    static {
        try {
            v5.#c;
        } catch(e9) {
        }
    }
    f;
    static b = v5;
    1000 = v3;
    [v3] = v3;
    static #g;
    static 5;
}
const v10 = new C6();
new C6();
const v12 = new C6();
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v12;
}
const v18 = new F13(v5, C6, v12);
new F13(v3, v10, v18);
const v20 = new F13(v3, F0, v12);
[v20];
const v23 = [[v10]];
function f27(a28, a29, a30, a31) {
    return a31;
}
f27("length", "length", "length", v23);
