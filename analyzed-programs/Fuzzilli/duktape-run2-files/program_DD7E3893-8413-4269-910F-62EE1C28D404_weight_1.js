new WeakSet();
class C11 extends WeakSet {
    static get g() {
        for (let v13 = 0; v13 < 32; v13++) {
            this["p" + v13] = v13;
        }
        return this;
    }
    static #m(a17, a18, a19) {
        const v21 = [a19,-65537];
        const v22 = ("33202").split;
        Reflect.apply(v22, this, v21);
        return v22;
    }
}
new C11();
new C11();
new C11();
class C27 extends C11 {
    static #e = -65537;
    static g;
    static #b;
}
const v28 = new C27();
new C27();
new C27();
v28[1073741824];
new WeakMap();
