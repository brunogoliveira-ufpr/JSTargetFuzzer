function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -918232307;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    constructor(a8) {
        const v9 = v3 | this;
        a8.f ^= v9;
        F0[5] = v9;
    }
    set c(a11) {
    }
}
new C6(v4);
new C6(v4);
const v17 = new C6(v5);
function f21(a22, a23) {
    const o24 = {
        "f": v4,
        __proto__: v3,
        "e": v4,
    };
    return o24;
}
f21(f21(v17, v17), f21);
f21(f21, v5);
