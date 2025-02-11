function f3() {
    return 4294967296;
}
class C4 {
    set d(a6) {
        this[a6];
    }
    static p(a12) {
        try {
            super.p(4294967296, -65536, 80130139);
        } catch(e17) {
        }
        return -2147483649;
    }
}
new C4();
const v19 = new C4();
new C4();
const v23 = new Float64Array(129);
const v26 = new Float64Array(1);
new BigInt64Array(782);
function f30(a31, a32) {
    const o33 = {
        "d": a32,
        "g": v26,
        "h": a32,
        1024: v26,
        __proto__: v23,
    };
    return o33;
}
f30(1, f30(-65536, C4));
f30(4294967296, v19);
