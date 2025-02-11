function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 8136;
    this.b = 8136;
}
new F0();
new F0();
new F0();
try {
const t0 = 9007199254740991;
t0();
} catch (e) {}
new Int32Array(3);
new Float64Array(128);
new Int8Array(8);
