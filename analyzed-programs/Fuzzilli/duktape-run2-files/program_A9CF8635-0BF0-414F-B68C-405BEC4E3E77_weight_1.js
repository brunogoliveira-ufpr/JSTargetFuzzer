function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 536870912;
    this.b = 536870912;
}
new F0();
new F0();
const v5 = new F0();
new Int32Array(3);
new Int16Array(10);
new Float64Array(10);
const v18 = new Int16Array(v5, 10, -11);
if (10) {
} else {
    v5[536870912] = v18;
}
