function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65536;
    this.b = -65536;
}
new F0();
const v4 = new F0();
new F0();
new Uint8ClampedArray(257);
const v11 = new BigInt64Array(3);
new BigUint64Array(29);
const v21 = -23265 - v4;
v4 && v21;
Math.sqrt(v4);
let v24 = v11.byteLength;
v24 = v21;
const v27 = 2147483647 + 2147483647;
Math.atanh(257);
257 || (v27 ** (257 * 2147483647));
-2147483647;
