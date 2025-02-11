function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -15;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f6() {
    return F0;
}
function f7(a8) {
    const o15 = {
        "f": a8,
        __proto__: v4,
        [f6](a10, a11) {
            return a10;
        },
        "e": v3,
        "b": f6,
        "d": f6,
        128: v4,
        "a": a8,
        "h": v4,
        8: v3,
    };
    return o15;
}
f7(v4);
const v17 = f7(v4);
const v18 = f7(v17);
const v20 = new Set();
class C24 extends f6 {
    constructor(a26, a27, a28, a29) {
        super();
        new Set(v3, v3, Set, a28, this, ...v20);
    }
    static set a(a35) {
        super.g;
        super.f;
    }
    #c;
}
new C24(v3, 254051659n, 254051659n, v18);
new C24(v17, -128n, 254051659n, v18);
new C24(v18, 4294967295n, 254051659n, v17);
let v44 = 0;
while (v44 < 4) {
    const v47 = v3.e;
    try { v4.race(F0, v47, v47); } catch (e) {}
    continue;
    v17[Symbol.iterator] = v20;
    v44++;
}
