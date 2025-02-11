const v1 = new Map();
function f2() {
    return Map;
}
class C3 extends Map {
    static [f2];
    [f2];
    #o(a5, a6) {
        let v7;
        try { v7 = v1.values(); } catch (e) {}
        try { new v7(a6, f2, f2, v1, a6); } catch (e) {}
        a6 | a6;
        return Math.min(~65535);
    }
}
const v15 = new C3();
const v16 = new C3();
const v17 = new C3();
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v17;
    this.c = a27;
}
new F24(268435439, v16, 268435439, v17);
new F24(512, v1, 268435439, v16);
const v32 = new F24(268435439, v15, 268435439, v16);
v1.__proto__ = v16;
v32.d;
