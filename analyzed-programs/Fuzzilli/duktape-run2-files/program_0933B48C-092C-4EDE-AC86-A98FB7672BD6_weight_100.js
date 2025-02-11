new Uint8Array(1000);
const v5 = new Float64Array(4);
const v8 = new Int16Array(512);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a14;
}
new F9(512, 4, v8, Float64Array);
const v16 = new F9(512, 512, Float64Array, Uint8Array);
new F9(4, 1000, 512, v16, F9, v5, F9);
new Date();
let v32 = 536870912;
do {
    v32++;
} while (v32 < 3)
