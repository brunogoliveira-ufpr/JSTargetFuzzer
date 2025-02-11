function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.d = a8;
    this.g = -4294967295;
}
const v12 = new F6(-4294967295, -346230497, -346230497, 9007199254740991);
const v13 = new F6(-346230497, 9007199254740991, v12, -346230497);
const v14 = new F6(2147483647, 255, 2147483647, 255);
a = v14;
v14[536870889] = 2147483647;
const v15 = v13[5];
-346230497 != v15;
try { v15(v12, -346230497); } catch (e) {}
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a20;
    this.c = a21;
    this.b = 536870889;
}
new F18(v12, 2147483647);
const v23 = new F18(v12, F18);
new F18(v13, v23);
function F37(a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 831213088;
    this.c = -762451292;
    this.d = 10000;
}
const v42 = new F37(64, 64, -1.3486461244335136e+307);
new F37(64, -62221, -1.3486461244335136e+307);
new F37(10000, 4294967297, -1.3486461244335136e+307);
v42[1024] = -877.9371151192076;
