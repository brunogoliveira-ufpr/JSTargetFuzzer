function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1729n;
}
const v10 = new F6(-7n, -7n);
new F6(-7n, 65537n);
new F6(1729n, -7n);
let v13 = v10.h;
v13 * v13;
Math.cbrt(v13);
Math.fround("byteLength");
Math.hypot("a");
new F6(v13, -7n);
v13 = -7n;
