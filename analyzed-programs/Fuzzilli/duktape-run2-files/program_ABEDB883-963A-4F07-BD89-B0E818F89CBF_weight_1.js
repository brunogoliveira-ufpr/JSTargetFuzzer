function f0() {
    const o10 = {
        p(a5) {
            this & a5;
            for (let v7 = 0; v7 < 32; v7++) {
                this["p" + v7] = v7;
            }
            return "setInt16";
        },
        "d": -9007199254740990,
        "e": -9007199254740990,
        8: "setInt16",
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
f0();
function f14() {
    return f0;
}
let v15 = 2;
new Float32Array(v15);
new BigUint64Array(128);
const v23 = new Int16Array(128);
const v24 = delete v23?.length;
let v25 = 0;
while (v25 < 8) {
    v15 /= v25;
    const v28 = v12.d;
    v24?.[0];
    function F30(a32, a33, a34) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = 128;
    }
    new F30(v11, v12, v28);
    new F30(v12, Float32Array, v28);
    new F30(v11, F30, 128);
    v25++;
}
