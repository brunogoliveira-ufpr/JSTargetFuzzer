function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 65536;
    this.f = 65536;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[v4,v5,v5];
const v7 = [F0,v5,v3];
const v8 = [v7,F0,v3];
function f18(a19, a20, a21, a22) {
    return 129;
}
f18(-2147483649, v4, v3, v8);
try { v7.keys(); } catch (e) {}
9223372036854775807 instanceof F0;
