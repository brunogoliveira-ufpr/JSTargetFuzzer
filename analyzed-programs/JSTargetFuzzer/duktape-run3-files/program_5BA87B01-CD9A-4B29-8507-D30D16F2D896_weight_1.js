function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9007199254740992;
    this.e = -9007199254740992;
    this.c = -9007199254740992;
}
new F0();
new F0();
new F0();
new Int8Array(127);
let v9 = 128;
new Int16Array(v9);
new Float64Array(224);
v9 = 127;
const o17 = {
    "maxByteLength": 257,
};
const v19 = new SharedArrayBuffer(7, o17);
new BigInt64Array(v19);
