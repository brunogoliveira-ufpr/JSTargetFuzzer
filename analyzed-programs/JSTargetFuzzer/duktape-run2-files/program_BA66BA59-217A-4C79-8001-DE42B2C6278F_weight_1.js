function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870889;
    this.f = 536870889;
}
const v3 = new F0();
new F0();
new F0();
const v13 = Symbol.toPrimitive;
const o17 = {
    [v13]() {
        v13[Symbol.toStringTag] = v3;
        return 34355;
    },
};
