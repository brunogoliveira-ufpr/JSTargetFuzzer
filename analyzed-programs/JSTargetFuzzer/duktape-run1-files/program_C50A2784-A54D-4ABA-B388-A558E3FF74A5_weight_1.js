new Uint8ClampedArray(8);
const v12 = new Int16Array(257);
const v15 = new Int16Array(8);
const o16 = {
    "a": v12,
    "g": v12,
};
for (let v17 = 0; v17 < 32; v17++) {
    v15["p" + v17] = v17;
}
delete o16?.g;
