function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 65537;
    this.f = 65537;
    this.g = 65537;
}
new F0();
const v4 = new F0();
new F0();
const v8 = new Uint32Array(256);
const v11 = new Int32Array(879);
new Int32Array(3);
function f15() {
    return v11;
}
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a19;
}
new F16(v4, v8);
const v21 = new F16(Int32Array, 256);
new F16(v21, v4);
v21.e;
