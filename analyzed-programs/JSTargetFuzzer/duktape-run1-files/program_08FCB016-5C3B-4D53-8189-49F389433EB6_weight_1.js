new BigInt64Array(1024);
new Uint8Array(5);
new Float64Array(257);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a11;
    this.e = Float64Array;
    this.b = BigInt64Array;
}
new F9(1024, 5);
new F9(257, 257);
new F9(257, 257);
function f16() {
    return F9;
}
let v17 = 0;
while (v17 < 3) {
    const v20 = BigInt64Array instanceof f16;
    function f21() {
        return v20;
    }
    v17++;
}
