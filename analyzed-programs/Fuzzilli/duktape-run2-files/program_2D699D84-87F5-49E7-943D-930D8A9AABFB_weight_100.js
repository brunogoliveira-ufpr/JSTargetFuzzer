new Int16Array(5);
new Uint16Array(7);
new Uint8Array(1024);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a11;
    a12.f = a12;
}
const v13 = new F9(Int16Array, 1024);
const v14 = new F9(v13, 1024);
new F9(v14, Uint8Array);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    v13.d = 2;
}
const v19 = new F16();
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F21;
    this.g = this;
}
new F21("c", v19, v19);
const v29 = new Int8Array(2002);
const v32 = new Float32Array(v29);
const t24 = "c";
t24[v32] = 2024;
let v34 = 0.0;
-F16;
!v34;
--v34;
536870912 << 536870912;
F21[16];
