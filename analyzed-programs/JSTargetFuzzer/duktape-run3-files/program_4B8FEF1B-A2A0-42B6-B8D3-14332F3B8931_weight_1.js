new Set();
const v7 = new Int8Array(237);
new Uint8ClampedArray(3121);
const v13 = new BigUint64Array(10);
let {"buffer":v14,} = v7;
v7[237] = -65535;
try {
const t0 = 3121;
t0(Uint8ClampedArray, Uint8ClampedArray, 3121, Uint8ClampedArray, 10);
} catch (e) {}
const v19 = v13[95];
function f20() {
    return v19;
}
