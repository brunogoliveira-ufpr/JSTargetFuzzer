function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 7;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    constructor(a8, a9) {
        function f10(a11, a12, a13, a14) {
            const o15 = {
                6: a9,
                __proto__: v4,
            };
            return o15;
        }
        f10(this, v5, v4, a8);
        f10(a8, v3, a9, f10(v3, v5, a8, f10));
    }
    [v4] = F0;
    static #h = v5;
    static [F0];
}
const v19 = new C6(v4, v5);
const v20 = new C6(v19, v4);
new C6(v20, v3);
const v27 = -Infinity;
/hRa??N\P{Decimal_Number}x+/su;
/s\u{12345}\u{23456}/mdiv;
const v30 = /Z(?!(a))\1/gdiu;
let v31 = !v27;
v30["test"]("test");
let v34 = 0;
do {
    const v35 = C6 > -1458234007;
    if (v35) {
        v31 += v35;
    } else {
        new Array(189);
    }
    v34++;
} while (v34 < 0)
