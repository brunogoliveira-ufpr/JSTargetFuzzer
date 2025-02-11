function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 3;
    this.d = 3;
    this.g = 3;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v3;
    this.e = a8;
}
new F6(v3, v3);
new F6(v5, v5);
new F6(v5, v5);
const v17 = Symbol.toPrimitive;
const o22 = {
    [v17]() {
        super.g;
        this.d;
        Symbol.toPrimitive;
        return 960976262;
    },
};
