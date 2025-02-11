const v2 = new Uint8ClampedArray(2);
const v5 = new BigUint64Array(2046);
new BigUint64Array(256);
const v11 = new Float32Array(3466);
new Float64Array(2);
let v15 = 13;
const v17 = new Uint32Array(v15);
const v19 = Symbol.isConcatSpreadable;
const v20 = v5[v19];
if (v20) {
    v15 = 3466;
    v20[2] = v17;
} else {
    v19.e = v17;
}
try { v2.set(v11, 2); } catch (e) {}
