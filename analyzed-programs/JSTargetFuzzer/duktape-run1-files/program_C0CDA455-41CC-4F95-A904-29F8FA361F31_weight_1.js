function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -4;
    this.f = -4;
    this.c = -4;
}
new F0();
new F0();
const v5 = new F0();
const v8 = new Uint8Array(0);
new Uint32Array(129);
new Uint8ClampedArray(64);
function f15(a16) {
    return v8;
}
class C17 extends f15 {
    [Uint32Array] = v5;
    static 0 = v8;
}
64 >= 129 ? 64 : 129;
try { v5.toString(f15, Uint32Array); } catch (e) {}
