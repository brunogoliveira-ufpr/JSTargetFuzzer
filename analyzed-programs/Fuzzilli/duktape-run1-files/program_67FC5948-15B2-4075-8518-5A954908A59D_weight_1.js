function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.b = f0;
}
new F1();
const v4 = new F1();
new F1();
class C6 extends F1 {
    [-1] = F1;
    f = f0;
    static get a() {
        for (const v8 of this) {
            for (let v9 = 0; v9 < 32; v9++) {
                this["p" + v9] = v9;
            }
        }
        return f0;
    }
    static 3400276166;
}
const v12 = new C6();
new C6();
new C6();
const v21 = f0 >>> 9;
class C22 extends F1 {
    3964 = v21;
    [v4] = 257;
    static #a = v12;
    4;
}
new C22();
new C22();
new C22();
