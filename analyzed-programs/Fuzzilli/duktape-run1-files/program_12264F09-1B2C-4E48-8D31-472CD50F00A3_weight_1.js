new Int8Array(7);
new Uint16Array(133);
new Uint32Array(3);
class C10 extends Int8Array {
    static #a = Int8Array;
    #valueOf(a12, a13) {
        10000 && a13;
        +10000;
        Math.max(10000);
        Math.log2(10000);
        return (10000 ** a13) && a13;
    }
}
const v23 = new C10();
new C10();
new C10();
function F26(a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a28;
    this.d = a29;
    this.f = a30;
}
new F26(3, Uint32Array, 7);
new F26(7, C10, 133);
const v33 = new F26(133, v23, 3);
v33[Symbol.replace];
