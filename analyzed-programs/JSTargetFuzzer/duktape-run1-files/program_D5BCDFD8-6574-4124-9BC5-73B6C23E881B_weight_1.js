function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 5;
    this.d = 5;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
}
new F6(v3, v3);
new F6(v3, v3);
new F6(v5, v5);
new Float32Array(16);
new Uint32Array(256);
new Int16Array(144);
const v25 = [-2.6449340380817625e+307,-0.0,1.7976931348623157e+308,-101907.40093933546];
const v26 = [1.0,0.4606397470868786,-5.0,-1.0,-593606.0971247352,0.14106584065804928,-1.0,-1000000.0,-4.0,-1.7976931348623157e+308];
const v27 = [1.4632867118861435e+308,-5.743731395603864,-285.9237396271817,0.4716531803550563,0.40223692218602014,-Infinity];
const v30 = new Uint8Array();
const v32 = new Int16Array();
let v33;
try { v33 = v32.find(); } catch (e) {}
v33 <<= v30;
new Array(1024);
[-347526448,16753,4294967297];
const v37 = [10000,-9007199254740992,10,1024,2147483648,9223372036854775807,-1461515778];
[37736];
if (v27) {
    v26.length ||= 1024;
    v37.length = v25.length;
} else {
}
Object.defineProperty(v37, 6, { configurable: true, get: Array, set: Array });
