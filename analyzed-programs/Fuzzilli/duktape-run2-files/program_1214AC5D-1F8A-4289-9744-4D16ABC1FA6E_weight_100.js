new Int32Array(4096);
new Float32Array(9);
new Int16Array(9);
new Uint16Array(9);
new Uint16Array(3);
new Uint8Array(6);
const v19 = new Int16Array(Int16Array);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    a24 % v19;
}
const v26 = new F21(Int16Array, 1024);
new F21(v26, v26);
