new BigInt64Array(10);
const v8 = new Uint32Array(154);
const v11 = new Uint32Array(10);
v8[v11] = -2147483648;
const o12 = {
    "b": -2147483648,
    ...v8,
};
const o13 = {
};
const v15 = new Proxy(v8, o13);
o13[9] = v15;
