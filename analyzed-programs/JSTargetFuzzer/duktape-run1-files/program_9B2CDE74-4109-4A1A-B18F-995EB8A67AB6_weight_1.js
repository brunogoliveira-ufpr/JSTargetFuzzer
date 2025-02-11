function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 10;
    this.b = 10;
    this.c = 10;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
class C9 extends F0 {
    constructor(a11, a12, a13, a14) {
        super();
        v4.h >>>= a14;
        v5.c;
        new Uint8ClampedArray(1217);
        new BigUint64Array(7);
        new Uint16Array(1016);
    }
}
const v25 = new C9(v3, v3, v5, Infinity);
const v26 = new C9(v4, v4, v25, Infinity);
const v27 = new C9(v26, v5, C9, Infinity);
v25.c = 558992021;
v5 >>>= v3;
const v31 = v26[C9];
for (let v32 = 0; v32 < 32; v32++) {
    v31["p" + v32] = v32;
}
try { v31(2147483647, F0, ...v27, 23.618498504982313, Infinity); } catch (e) {}
new F0();
