function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1241668236;
    this.d = 1241668236;
    this.g = 1241668236;
}
const v3 = new F0();
new F0();
new F0();
class C9 extends F0 {
    get c() {
        let v12 = 1000;
        const v14 = v12 >>> ++v12;
        Math.log1p(v12);
        Math.floor(v14);
        let v17 = v14 >>> v12;
        v17++;
        return -v14;
    }
}
const v20 = new C9();
const v21 = new C9();
const v22 = new C9();
function f23(a24, a25) {
    function F26(a28, a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = a30;
        this.e = a28;
    }
    new F26(a25, a24, v21);
    new F26(v22, a24, v21);
    new F26(C9, v21, v20);
    return a24;
}
f23(v3, "d");
