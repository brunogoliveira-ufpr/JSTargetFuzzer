function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -536870912;
    this.h = -536870912;
}
new F0();
new F0();
new F0();
function f9() {
    return "-4294967296";
}
const v20 = Symbol.toPrimitive;
const o29 = {
    [v20]() {
        Math.cosh(-15);
        -3.0 << -3.0;
        -3.0 | -15;
        -15 || "lastIndexOf";
        return -5;
    },
};
