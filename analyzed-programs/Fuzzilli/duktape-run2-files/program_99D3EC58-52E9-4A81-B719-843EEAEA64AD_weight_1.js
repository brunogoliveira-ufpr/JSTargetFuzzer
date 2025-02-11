function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -7;
    this.e = -7;
}
const v3 = new F0();
new F0();
new F0();
new Map();
let v11 = 0;
new BigInt64Array(v11);
new BigUint64Array(4062);
new Uint16Array(1916);
1916 | Uint16Array;
let v21 = 0;
do {
    v11 = v21;
    try { v3.valueOf(-4294967297, Map, -4294967297); } catch (e) {}
    v21++;
} while (v21 < 6)
