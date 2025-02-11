function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 5;
}
new F0();
new F0();
new F0();
new Uint16Array(79);
new Int32Array(128);
new BigUint64Array(129);
const o20 = {
    "maxByteLength": 6,
};
const v22 = new SharedArrayBuffer(6, o20);
new Float64Array(v22);
