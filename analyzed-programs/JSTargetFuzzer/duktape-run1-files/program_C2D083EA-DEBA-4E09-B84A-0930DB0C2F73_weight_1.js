function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 536870889;
    this.e = 536870889;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    constructor(a8) {
        super();
        try { v5["p"](v5, "p", -7); } catch (e) {}
        ("p")[7];
    }
    static {
        for (let i17 = 0; i17 < 4; i17++) {
            v3 ** i17;
        }
    }
}
const v27 = new C6(v3);
const v28 = new C6(v27);
const v29 = new C6(v5);
function f30(a31, a32, a33) {
    const o41 = {
        o(a35, a36, a37) {
            this.f = v3;
            for (let v38 = 0; v38 < 32; v38++) {
                this["p" + v38] = v38;
            }
            return a35;
        },
        "f": v29,
        "a": C6,
        "c": a31,
        "b": a31,
        "h": a33,
    };
    return o41;
}
const v42 = f30(v3, v27, v5);
const v43 = f30(v5, v29, v5);
const v44 = f30(v29, v4, v3);
var g = v44;
function F48(a50, a51, a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v4;
}
const v54 = new F48(-39186, v44, -140811277, -516319049);
const v55 = new F48(v54, v42, -39186, v28);
new F48(v44, v43, -39186, v55);
v29.d = v29 << -140811277;
C6.length = 2;
