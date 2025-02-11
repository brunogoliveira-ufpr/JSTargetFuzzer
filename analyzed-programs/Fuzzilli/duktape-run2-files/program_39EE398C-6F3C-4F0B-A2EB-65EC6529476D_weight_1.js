function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 23370;
    this.e = 23370;
    this.a = 23370;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
    this.f = F0;
}
const v9 = new F6(v5);
new F6(v3);
new F6(v3);
new BigUint64Array(0);
new Uint32Array(69);
const v20 = new BigInt64Array(7);
class C24 {
    n(a26, a27) {
        super.e = v20;
        return a26;
    }
    #b = v9;
}
new C24();
new C24();
new C24();
