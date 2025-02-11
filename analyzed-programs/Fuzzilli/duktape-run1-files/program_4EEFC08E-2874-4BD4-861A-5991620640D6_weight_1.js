new BigInt64Array(3530);
new Int32Array(4);
new Uint8ClampedArray(5);
const v14 = new Float32Array(7);
const v17 = new BigInt64Array(5);
const v20 = new BigUint64Array(8);
try { new BigUint64Array(...BigInt64Array, ...v20, ...v17, ...v14, 7, v20); } catch (e) {}
