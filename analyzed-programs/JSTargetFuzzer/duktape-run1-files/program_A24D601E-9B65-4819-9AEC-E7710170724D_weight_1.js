const v4 = new WeakSet();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a7;
    this.a = 1.0;
}
const v9 = new F5(-9.67113122101987e+307, -9.67113122101987e+307);
const v10 = new F5(-9.67113122101987e+307, 1.0);
new F5(0.0, 0.0);
function f12(a13, a14, a15) {
    const o19 = {
        [v10]: a13,
        "f": F5,
        "c": a14,
        "d": -9.67113122101987e+307,
        __proto__: v9,
        get g() {
            try {
                super.p(this, this, WeakSet, this, a15);
            } catch(e18) {
            }
            return v9;
        },
    };
    return o19;
}
const v20 = f12(1.0, 1.0, v10);
f12(1.0, 0.0, v9);
const v22 = f12(-9.67113122101987e+307, 0.0, v10);
function f23(a24, a25, a26, a27) {
    let v28 = v10.e;
    v28 = WeakSet;
    const v29 = a26.d;
    delete v4[1.0];
    try { v29(v9, a24); } catch (e) {}
    return a26;
}
const t37 = f23(-9.67113122101987e+307, 1.0, v22, v9);
delete t37[v20];
