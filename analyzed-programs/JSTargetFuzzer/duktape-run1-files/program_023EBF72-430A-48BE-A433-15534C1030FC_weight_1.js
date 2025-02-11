new Int32Array(4);
const v5 = new Float32Array(91);
const v8 = new Int32Array(64);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = Float32Array;
    this.f = a12;
    this.c = a13;
}
const v15 = new F9(4, Int32Array, Int32Array, 4);
const v16 = new F9(4, v15, v8, 64);
const v17 = new F9(4, v16, v5, 4);
class C21 {
    #c = F9;
    static [v17];
    #h;
}
new C21();
new C21();
new C21();
