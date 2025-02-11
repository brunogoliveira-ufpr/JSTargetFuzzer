function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -42799;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
}
new F6(v5, v4);
const v11 = new F6(v4, v4);
const v12 = new F6(v5, v3);
const v17 = [[1595453861,v3],v12];
[F6,v17,1595453861,v5];
v5[Symbol.isConcatSpreadable];
delete v4[2147483648];
try { v5.clear(v11, 1595453861, 65535, -33177); } catch (e) {}
class C25 extends v17.constructor {
    e;
}
new C25();
