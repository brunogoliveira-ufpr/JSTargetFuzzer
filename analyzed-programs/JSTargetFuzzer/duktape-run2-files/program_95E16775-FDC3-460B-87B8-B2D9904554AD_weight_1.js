class C3 {
    #h;
    #c = 512;
    static {
        2.2250738585072014e-308 in this;
        this.c = -4294967297;
    }
    static 0;
    #a = -4294967297;
}
const v9 = new C3();
new C3();
const v11 = new C3();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = C3;
    this.d = v9;
}
const v16 = new F12(C3, v9);
const v17 = new F12(v11, v16);
const v18 = new F12(v11, v16);
const v19 = v18[65537];
try { v19(-4294967297); } catch (e) {}
const v21 = (a22, a23, a24) => {
    function F25(a27, a28, a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = -4294967297;
    }
    const v31 = new F25(a22, a24, v17, a24);
    const v32 = new F25(v31, a24, a24, a22);
    new F25(v11, v16, v32, v17);
    return F25;
};
