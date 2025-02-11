function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 52614;
    this.g = 52614;
    this.f = 52614;
}
new F0();
const v4 = new F0();
const v5 = new F0();
try { v5["any"](v5, 1024, 11n, v5, v4); } catch (e) {}
function f14(a15) {
    return v5;
}
class C16 extends f14 {
    static #a = v4;
    static 6;
    #d = F0;
    static [1024];
}
