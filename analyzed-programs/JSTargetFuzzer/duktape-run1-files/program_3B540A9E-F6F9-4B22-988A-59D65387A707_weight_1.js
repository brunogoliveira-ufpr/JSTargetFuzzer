function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 53510;
}
new F0();
const v4 = new F0();
new F0();
const v8 = new Int8Array(410);
const v11 = new Int8Array(9);
new BigUint64Array(1091);
function f15() {
    return 410;
}
function f16() {
    return v8;
}
f15(410, ...v8, ...v11, v4, 1091, Int8Array);
Object.defineProperty(v4, 410, { writable: true, get: f15, set: f15 });
v11[-99336361] = Int8Array >>> 410;
