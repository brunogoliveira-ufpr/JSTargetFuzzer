new Float64Array(255);
new Int8Array(1);
new Uint8ClampedArray(512);
const o14 = {
    "maxByteLength": 129,
};
const v16 = new SharedArrayBuffer(0, o14);
const v18 = new Int32Array(v16);
try { v18.some(255, 129); } catch (e) {}
