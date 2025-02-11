const v2 = new Int32Array(44);
new Int32Array(256);
new Int32Array(5);
class C9 extends Int32Array {
    #p(a11, a12, a13, a14) {
        const v15 = super.every(a11);
        function F16(a18, a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a20;
            this.b = v2;
        }
        new F16(a13, 44, 5, v2);
        new F16(256, 44, 44, v2);
        new F16(5, a14, 256, a11);
        return v15;
    }
    static a;
    static #h;
    #c;
    static #g = Int32Array;
}
new C9();
const v26 = new C9();
new C9();
const v29 = new WeakSet();
const v30 = v29[v26];
function F31(a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v30;
    this.h = Int32Array;
}
new F31(5, Int32Array, v30);
new F31(5, Int32Array, Int32Array);
new F31(256, v30, Int32Array);
new Uint8Array(2);
new Float32Array(2962);
new Uint16Array(129);
