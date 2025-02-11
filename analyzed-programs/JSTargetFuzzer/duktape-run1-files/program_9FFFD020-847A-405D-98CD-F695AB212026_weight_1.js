function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = null;
}
const v3 = new F1();
new F1();
const v5 = new F1();
const v6 = [v3,F1];
[,];
const v9 = [v5,F1,v5];
[[v3,null,[v6,[v6,v3],v5],v9]];
function f14() {
    return v5;
}
function F21(a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -14;
    this.f = 5;
    this.c = -14;
}
const v24 = new F21(-14);
const v25 = new F21(6);
const v26 = new F21(6);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a35;
    a33.d = -14;
    this.h = a33;
}
new F30(v26, v25, 2528, v25);
const v37 = new F30(v26, v26, 2528, v26);
const v38 = new F30(v25, v26, 129, v25);
Object.defineProperty(v24, 268435456, { configurable: true, value: v26 });
v37[v38] >>>= 5;
v25[Symbol.split];
