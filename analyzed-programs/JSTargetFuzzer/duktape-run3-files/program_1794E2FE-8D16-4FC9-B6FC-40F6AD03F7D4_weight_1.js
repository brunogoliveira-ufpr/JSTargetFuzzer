function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0;
    this.g = 0;
}
new F0();
new F0();
new F0();
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    const v22 = new Int16Array(a19, a18);
    try { v22(); } catch (e) {}
}
new F15();
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741825;
    const t17 = "bigint";
    t17.h = 1073741825;
    this.f = 1073741825;
}
const v28 = new F25();
const v29 = new F25();
new F25();
new Int16Array(255);
new Int16Array(1000);
new Uint8ClampedArray(1000);
v28[v28];
let v41 = 10;
for (; v41--;) {
    v29.f = Int16Array;
}
