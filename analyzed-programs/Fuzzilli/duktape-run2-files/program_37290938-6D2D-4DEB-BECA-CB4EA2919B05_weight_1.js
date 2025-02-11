function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -128;
}
new F0();
const v4 = new F0();
new F0();
const v9 = [1300439897];
const v10 = [16,-16,4294967297,16,-256,-48676];
const v11 = [-4294967295,64,1024,7591];
const v14 = new Uint8Array(157);
new BigInt64Array(3);
new Int32Array(0);
for (const v21 in v4) {
    function f22() {
        return v21;
    }
    v9[f22] = v21;
    v14[v11] = f22;
}
v10["flat"]();
