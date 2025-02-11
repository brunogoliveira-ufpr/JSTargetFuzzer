const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
new Uint8ClampedArray(66);
const v11 = new Uint8ClampedArray(8);
new BigUint64Array(0);
function f15(a16) {
    return a16;
}
class C17 extends f15 {
    static #b;
    static a = v4;
    h = v3;
    static #a;
}
try { v11.filter(f15, v3); } catch (e) {}
