function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -4294967295;
    this.b = -4294967295;
    this.e = -4294967295;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new Int8Array(255);
new Int8Array(105);
let v15 = 175;
new Int16Array(v15);
v5 instanceof Int8Array;
!-1000000.0;
++v15;
const v24 = -3;
try { v4(v24, v4, v15, 236287658); } catch (e) {}
let v27 = 16;
v27 >> v24;
const v30 = ++v27;
Math.acosh(v24);
v27 | v30;
Math.log(v27);
