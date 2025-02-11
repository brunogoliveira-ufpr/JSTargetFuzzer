function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9007199254740991;
    this.h = 9007199254740991;
}
new F3(-128, 9007199254740991);
const v8 = new F3(-128, 31455);
new F3(-128, 31455);
v8[63726n] = -1.7976931348623157e+308;
new F3(9007199254740991, 9007199254740991);
const o21 = {
    valueOf() {
        try {
        const t0 = 31455;
        t0(this, 63726n, 1000000000000.0, F3, this);
        } catch (e) {}
        try {
            super.o();
        } catch(e20) {
        }
        return 707.4211989294199;
    },
};
