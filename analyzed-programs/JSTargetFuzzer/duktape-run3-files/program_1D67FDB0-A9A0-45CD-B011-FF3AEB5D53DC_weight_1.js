function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a7;
}
new F4(129, 1745231433);
const v9 = new F4(1745231433, 10);
new F4(1745231433, 10);
function f29(a30, a31) {
    const o32 = {
        "e": v9,
        __proto__: a31,
        "sticky": 24080,
        [a31]: F4,
    };
    return o32;
}
f29(-1, -1);
f29(-793786875, 129);
f29(9007199254740990, 24080);
