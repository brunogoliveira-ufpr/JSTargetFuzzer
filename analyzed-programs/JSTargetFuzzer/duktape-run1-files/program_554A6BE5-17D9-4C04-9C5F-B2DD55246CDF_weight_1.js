function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741824;
    this.b = 1073741824;
}
new F0();
const v4 = new F0();
new F0();
new Set();
new Float32Array(0);
new Uint32Array(57);
new BigUint64Array(168);
delete v4[5];
new Int32Array(512);
new Int32Array(10);
new Float32Array(256);
