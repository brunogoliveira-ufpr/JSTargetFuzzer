function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2;
    this.b = -2;
    this.d = -2;
}
const v3 = new F0();
new F0();
new F0();
new BigUint64Array(7);
const v11 = new Uint32Array(14);
new Float32Array(257);
257 in v3;
let v21 = v11 << v11;
const v22 = v11 ** v11;
!v22;
v22 && v11;
v22 - v22;
v21--;
