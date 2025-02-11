function f0() {
}
function f1() {
    return f0;
}
new Float64Array(10);
const v7 = new Uint16Array(256);
new Uint32Array(64);
new Uint8ClampedArray(0);
new Int16Array(64);
new Int8Array(2887);
f1();
try { v7.slice(64, 64); } catch (e) {}
function f22(a23, a24, a25) {
    return a24;
}
f22(64, Uint16Array, f0);
