function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2147483648;
    this.b = 2147483648;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a11;
    this.g = -2.7300710950932654;
    this.a = v3;
}
const v14 = new F9(1000.0, v5, 1000.0);
const v15 = new F9(1000.0, v5, 1000.0);
const v16 = new F9(2.2250738585072014e-308, v5, 2.2250738585072014e-308);
let v17;
try { v17 = v4(v16, v15, F0, v4); } catch (e) {}
let v18 = 0;
while (v18 < 7) {
    v14.d = v4;
    v3[9] ^= v18;
    v3[0] = F9;
    (-2.7300710950932654) ** v17;
    v18++;
}
