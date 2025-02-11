function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 5826;
    this.d = 5826;
    this.e = 5826;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F0;
    this.e = a14;
    this.h = a11;
}
const v15 = new F9(v4, -65537, 16, 16);
const v16 = new F9(v5, 16, 8, v15);
const v17 = new F9(v3, 8, 8, v16);
[F9,[1073741824n,1073741824n,-65537,F9],16];
const v23 = [F9,v17];
for (let i26 = 0, i27 = 10; i26 < i27; i26++, i27--) {
    v17[i26] %= i27;
    try { v3["p"](v23, v16, v4, i27, i26); } catch (e) {}
}
