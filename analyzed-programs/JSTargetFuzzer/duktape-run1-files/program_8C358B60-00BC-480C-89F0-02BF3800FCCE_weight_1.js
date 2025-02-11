const v2 = new Int32Array(8);
let v4 = Int8Array;
new v4(224);
new Int16Array(3822);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    this.f = a11;
}
const v15 = new F9(Int16Array, 224, 8, 224);
const v16 = new F9(v15, 224, 224, 8);
let v17 = new F9(v2, 8, 3822, 3822);
v17[v16] = v17;
if (8) {
    ({"buffer":v17,"byteLength":v4,} = v2);
} else {
    delete v17?.f;
}
try { v15.abs(); } catch (e) {}
typeof v16 === "object";
