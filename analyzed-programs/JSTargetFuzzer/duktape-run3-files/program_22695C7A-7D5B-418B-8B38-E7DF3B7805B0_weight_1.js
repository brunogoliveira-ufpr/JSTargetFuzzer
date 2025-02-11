new Int32Array(5);
new BigUint64Array(3748);
new Float32Array(1000);
new Int16Array(167);
const v14 = new Uint8Array(255);
new BigInt64Array(4096);
3748 === BigInt64Array;
4096 !== BigInt64Array;
const o20 = {
    "h": 1000,
};
const o21 = {
};
new Proxy(BigInt64Array, o21);
let v27 = 65537 & -65536;
v14 / v27;
--v27;
let v30 = 65537 && v27;
v30++;
