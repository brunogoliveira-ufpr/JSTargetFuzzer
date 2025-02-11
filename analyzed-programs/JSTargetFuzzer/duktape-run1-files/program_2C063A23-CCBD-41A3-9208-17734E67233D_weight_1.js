const v5 = new BigUint64Array(2);
new Uint8ClampedArray(4);
const v11 = new Uint8Array(2);
const v15 = `
    const v16 = v5.byteLength;
    v11.__proto__ = v5;
    Math.asin(v16);
    const v20 = ~65535;
    65535 - v16;
    Math.expm1(v20);
    -65535;
`;
eval(v15);
