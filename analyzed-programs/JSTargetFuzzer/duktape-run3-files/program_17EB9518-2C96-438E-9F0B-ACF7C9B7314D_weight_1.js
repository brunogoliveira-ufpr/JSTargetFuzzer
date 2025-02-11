new Float64Array(613);
const v5 = new Int32Array(2073);
const v8 = new Int32Array(2);
class C9 extends Int32Array {
    set b(a11) {
        super.g = a11;
        let v14 = this - this;
        const v15 = ++v14;
        3 * v15;
        Math.log2(v15);
    }
    static [v5] = 2073;
}
const v18 = new C9();
const v19 = new C9();
const v20 = new C9();
Object.defineProperty(v20, v20, { writable: true, configurable: true, value: v8 });
c = Float64Array;
const v24 = ("g")[v5];
v20[2] = 2;
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v19;
    this.e = v24;
    this.f = a28;
}
new F25(v18, v20);
new F25(v8, v19);
new F25(v20, v24);
