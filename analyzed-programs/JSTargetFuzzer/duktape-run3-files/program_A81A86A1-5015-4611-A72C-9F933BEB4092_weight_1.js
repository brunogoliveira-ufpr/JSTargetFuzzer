function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -5;
}
const v3 = new F0();
new F0();
new F0();
const v16 = Symbol.toPrimitive;
const o21 = {
    [v16]() {
        this[this] = v3;
        return "toString";
    },
};
