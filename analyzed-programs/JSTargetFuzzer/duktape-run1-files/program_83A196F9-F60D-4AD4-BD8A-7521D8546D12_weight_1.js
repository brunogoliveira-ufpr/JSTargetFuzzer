function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.c = 127;
}
new F9(-26961, 6, 6);
new F9(1, 9, 127);
const v16 = new F9(9, 1024, 127);
1 >> v16;
new BigUint64Array(303);
new Uint32Array(8);
new Float32Array(8);
