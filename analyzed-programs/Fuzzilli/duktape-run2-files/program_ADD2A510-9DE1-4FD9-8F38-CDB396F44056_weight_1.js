new Uint32Array(1024);
new Int16Array(9);
const v8 = new Float64Array(129);
const v12 = [Int16Array,v8,65535n,-9n];
const v13 = [Int16Array,v12,Uint32Array];
[Int16Array,65535n,9,1024];
const o15 = {
    __proto__: v12,
    "h": v13,
    ...v12,
    "c": 1024,
};
try { Float64Array(129, 1024); } catch (e) {}
const o19 = {
    "maxByteLength": 4061879030,
};
const v21 = new SharedArrayBuffer(3, o19);
new Uint16Array(v21);
