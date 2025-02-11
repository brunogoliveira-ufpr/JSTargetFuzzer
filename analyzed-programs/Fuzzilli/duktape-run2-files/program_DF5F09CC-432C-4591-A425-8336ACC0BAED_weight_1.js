function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 256;
    this.f = 256;
    this.g = 256;
}
new F0();
new F0();
new F0();
new Uint8Array(561);
new BigUint64Array(1462);
const v14 = new Float32Array(3879);
v14[561] >>>= 1462;
let v15 = 0;
do {
    v15++;
} while (v15 < 4)
