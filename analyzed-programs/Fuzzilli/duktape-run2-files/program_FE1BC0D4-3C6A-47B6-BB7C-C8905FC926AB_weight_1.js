new WeakMap();
function f5() {
    return -9007199254740992;
}
const o12 = {
};
new Proxy(WeakMap, o12);
d = f5;
f5();
(-9) ** 1073741824;
const o19 = {
    "maxByteLength": 7,
};
const v21 = new SharedArrayBuffer(7, o19);
new Uint32Array(v21);
