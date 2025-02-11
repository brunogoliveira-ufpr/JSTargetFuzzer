let v10 = Float32Array;
new v10(10);
new BigUint64Array(129);
new Int8Array(128);
const v18 = `
    new v10(4, -25003, 129);
    3 % 3;
    3 || v10;
    const v25 = v10 * v10;
    -2.2250738585072014e-308 & v25;
    3 - v25;
    -2.2250738585072014e-308 % v25;
    ++v10;
`;
eval(v18);
