function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741825;
    this.h = 1073741825;
    this.f = 1073741825;
}
const v3 = new F0();
const v4 = new F0();
new F0();
new Int16Array(255);
new Int16Array(1000);
new Uint8ClampedArray(1000);
v3[v3];
let v16 = 10;
for (; v16--;) {
    v4.f = Int16Array;
}
