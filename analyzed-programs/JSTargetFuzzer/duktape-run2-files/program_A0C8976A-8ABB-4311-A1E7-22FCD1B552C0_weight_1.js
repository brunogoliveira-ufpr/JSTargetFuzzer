function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 8;
    this.b = 8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static #o(a8, a9) {
        a9 = this[v5];
        a9.e = a8;
        function f11() {
            return v4;
        }
        return a9;
    }
    [F0] = F0;
}
const v12 = new C6();
const v13 = new C6();
new C6();
const v16 = [v12,[v12,F0,C6],v12];
[v3,v16,C6];
try { v13(C6, v5); } catch (e) {}
let {"f":v22,} = v5;
function f23(a24) {
    return a24;
}
class C25 extends f23 {
    static a = v13;
    static #g = -1024;
    static [v16];
    6 = v3;
}
