new Uint32Array(6);
new Float64Array(4079);
const v8 = new Uint8Array(4096);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a14;
    this.h = 4096;
}
const v15 = new F9(6, 6, 6, Float64Array);
new F9(6, 6, 4079, F9);
const v17 = new F9(4096, 4079, 4096, v15);
v17[4];
let v22 = 0;
do {
    v15[4];
    v8[-1] ^= 1670802725;
    v22++;
} while (v22 < 9)
