function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 128;
    this.a = 128;
    this.d = 128;
}
let v3 = new F0();
new F0();
new F0();
const v8 = new BigInt64Array(64);
let v9 = 143;
const v11 = new Int16Array(v9);
const v14 = new Uint16Array(257);
try { v3.get(v11, v14, v14, v14, Int16Array); } catch (e) {}
let v17 = v9 * (Uint16Array / v11);
[v9,v17,v3,...F0] = v8;
new BigInt64Array(F0, 64);
delete v11?.length;
const v20 = v14.buffer;
for (let v21 = 0; v21 < 32; v21++) {
    v20["p" + v21] = v21;
}
