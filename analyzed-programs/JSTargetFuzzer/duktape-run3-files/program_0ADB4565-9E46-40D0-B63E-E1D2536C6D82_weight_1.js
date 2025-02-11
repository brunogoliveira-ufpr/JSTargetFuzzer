const v0 = /foo|(bar|baz)|quux/uysg;
const v1 = /[X]/uims;
const v2 = /I[I]/;
function f6(a7, a8) {
    const o17 = {
        "h": a7,
        set c(a10) {
            const o11 = {
            };
            new Proxy(v1, o11);
            new Array(7);
        },
        "d": a8,
        "g": -7,
        [a7]: -13377,
        "f": v1,
    };
    return o17;
}
const v18 = f6(v2, 10);
f6(v0, 10);
const v20 = f6(v0, -7);
class C24 extends f6 {
    constructor(a26, a27, a28) {
        super(v1, 10);
        const v29 = a28?.d;
        try { a26.acos(a28, v18, v29, 10, v2); } catch (e) {}
    }
    valueOf(a32, a33) {
        let v34 = super.f;
        v34 **= v34;
        try {
            super.join(a33, a33);
        } catch(e36) {
        }
        return v34;
    }
}
new C24(v20, "valueOf", "isSealed");
const v38 = new C24(v20, "isSealed", C24);
new C24(v38, "C", -13377);
("C")[536870912];
const v48 = +1.5187778897301062e+307;
const v49 = -4 << -4;
C24 << 1073741825;
Math.sign(v48);
Math.atan2(v49, 1.5187778897301062e+307);
