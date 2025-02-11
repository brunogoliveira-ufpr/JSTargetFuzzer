function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 256;
    this.f = 256;
    this.e = 256;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
    this.b = v3;
    this.a = v3;
}
const v9 = new F6(v4);
const v10 = new F6(v3);
new F6(v5);
new Int32Array(87);
new Float64Array(165);
new Float32Array(6);
if ((Int32Array >> F0) === v10) {
    v3 === 87;
} else {
    Object.defineProperty(v9, 3, { writable: true, value: F0 });
    const v26 = v4 || v4;
    Math.trunc(v26);
    Math.max(v4);
    +4;
    Math.tan(v26);
}
