function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 29999;
    this.e = 29999;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new Float64Array(13);
new Int8Array(16);
new Int16Array(1);
for (let v15 = 0; v15 < 32; v15++) {
    v5["p" + v15] = v15;
}
let v18 = delete v4?.g;
v18 = Int8Array;
