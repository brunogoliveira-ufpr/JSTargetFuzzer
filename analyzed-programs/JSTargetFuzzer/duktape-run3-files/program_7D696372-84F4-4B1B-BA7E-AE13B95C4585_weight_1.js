function f0() {
}
class C1 {
    static get e() {
        super.g;
        return 10312;
    }
    static [f0] = f0;
    #b = f0;
    [f0];
}
new C1();
new C1();
const v9 = new C1();
const o20 = {
    valueOf() {
        v9.g = this;
        return 65536;
    },
};
C1[Symbol.iterator];
