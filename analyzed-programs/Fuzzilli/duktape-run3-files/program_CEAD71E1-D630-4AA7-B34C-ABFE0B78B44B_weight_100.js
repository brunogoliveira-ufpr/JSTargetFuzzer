function f3() {
    return 6;
}
for (let v5 = 0; v5 < 5; v5++) {
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65535;
    this.d = a13;
}
const v15 = new Array(6);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Array;
    this.f = 6;
}
const v20 = new F16(6, F16);
const v21 = new F16(6, v20);
new F16(6, v21);
new Float32Array(v15);
