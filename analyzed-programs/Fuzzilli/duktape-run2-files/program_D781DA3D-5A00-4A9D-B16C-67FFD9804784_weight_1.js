function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 2;
}
const v3 = new F0();
new F0();
new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a13;
    this.g = a13;
}
const v14 = new F9("global", "string", "global");
new F9("string", "string", "string");
new F9("string", "string", "string");
const v19 = new Int8Array(2002);
new Uint16Array(2024);
const v25 = new Float32Array(1);
const t18 = "c";
t18[v25] = 2024;
let v28 = 0.0;
-v28;
!v28;
--v28;
536870912 << v28;
v19[16];
v3.__proto__ = v14;
