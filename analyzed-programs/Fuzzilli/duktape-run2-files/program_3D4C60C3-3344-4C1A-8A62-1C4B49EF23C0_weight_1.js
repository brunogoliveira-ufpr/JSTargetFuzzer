function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.b = f0;
    this.f = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
new WeakSet();
class C8 extends f0 {
    #m(a10, a11, a12) {
        super.g ^= a12;
        return WeakSet;
    }
    #c = f0;
    #f = v3;
    static [v4] = v3;
}
new C8();
new C8();
new C8();
for (let v19 = 0; v19 < 85; v19++) {
    new Uint8ClampedArray(64);
    new Int8Array(3);
    new Int16Array(512);
}
