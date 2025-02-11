const v4 = new Set();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a7;
    this.b = a8;
}
const v9 = new F5(4.1981844634044745e+307, -5.0);
new F5(4.1981844634044745e+307, 4.1981844634044745e+307);
new F5(-5.0, -5.0);
function f12() {
    return v4;
}
const v14 = new WeakMap();
Object.defineProperty(v14, 41, { configurable: true, set: f12 });
f12 + f12;
+v9;
for (let i18 = 0; i18 < 9; i18++) {
    new WeakMap();
}
