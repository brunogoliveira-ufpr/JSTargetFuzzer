function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = "o";
}
new F3(F3);
const v7 = new F3("symbol");
new F3("symbol");
const v13 = Symbol.toPrimitive;
const o17 = {
    [v13]() {
        v7[3276016186] &= 11;
        new F3(Symbol("g"));
        return 11;
    },
};
