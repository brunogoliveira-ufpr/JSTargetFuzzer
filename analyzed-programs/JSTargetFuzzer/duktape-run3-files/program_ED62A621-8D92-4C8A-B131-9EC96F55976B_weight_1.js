function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.b = f0;
    this.f = f0;
}
new F1();
const v4 = new F1();
const v5 = new F1();
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a14;
    this.f = a14;
}
new F12(v5, -1870539687, 16);
const v18 = new F12(v4, -1870539687, v5);
new F12(v4, -1870539687, F12);
delete v18[16];
const v22 = Symbol.search;
v4[v22] = F1;
v18[10] = -4096n;
v22.h = 536870888n;
-56534 << v18;
