function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 37098;
    this.h = 37098;
    this.e = 37098;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
new Int8Array(3);
let v10 = 128;
new Int16Array(v10);
const v15 = new BigUint64Array(1192);
v10 = 3;
new Int8Array(1192);
const v21 = v5 / 20504n;
const v22 = [3,v21,v3,v21];
[f6];
[Set];
v15[v22];
const v26 = new Set(v3);
Object.defineProperty(v26, "e", { configurable: true, enumerable: true, get: f6 });
