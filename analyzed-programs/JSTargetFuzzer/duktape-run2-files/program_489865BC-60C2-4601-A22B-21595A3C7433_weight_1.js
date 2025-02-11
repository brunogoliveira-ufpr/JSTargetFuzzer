class C3 {
    #c = -1000000000.0;
    static n(a5) {
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = 0.5729481003861925;
            this.h = a5;
            this.c = this;
        }
        new F6(4.0);
        new F6(-1000000000.0);
        const v11 = new F6(-1000000000.0);
        return v11;
    }
}
new C3();
const v13 = new C3();
const v14 = new C3();
function f15() {
    return 4.0;
}
const o19 = {
    "c": 4.0,
    __proto__: C3,
    [v14]: 2147483647,
};
v13.__proto__ = o19;
2147483647 ^ -59189;
