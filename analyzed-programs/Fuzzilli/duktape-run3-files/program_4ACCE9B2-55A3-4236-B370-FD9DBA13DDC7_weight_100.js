function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.callee = 7;
    F3.e = a5;
}
const v6 = new F3(7);
new F3(7);
new F3(v6);
const v15 = new Uint8ClampedArray(F3);
1073741825 || v6;
7 << F3;
v15[7] ^= 255;
