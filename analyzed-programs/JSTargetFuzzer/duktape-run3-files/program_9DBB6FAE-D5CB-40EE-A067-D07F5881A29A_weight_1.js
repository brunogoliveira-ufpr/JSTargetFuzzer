function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0;
    this.g = 0;
}
new F0();
new F0();
new F0();
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741825;
    const t11 = "bigint";
    t11.h = 1073741825;
    this.f = 1073741825;
}
const v18 = new F15();
const v19 = new F15();
new F15();
new Int16Array(255);
new Int16Array(1000);
new Uint8ClampedArray(1000);
v18[v18];
let v31 = 10;
for (; v31--;) {
    v19.f = Int16Array;
}
