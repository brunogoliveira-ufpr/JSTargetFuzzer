const v2 = new Int16Array(1024);
new Uint32Array(10);
const v8 = new Float32Array(1683);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    Uint32Array.h = Float32Array;
    this.d = v2;
}
new F9(1024, 1024, 10);
new F9(v8, 1024, 10);
new F9(Int16Array, 10, 1683);
const v18 = new Float64Array(Float64Array, Float64Array, Float64Array);
let v20;
try { v20 = v18["n"](); } catch (e) {}
for (const v21 in v20) {
}
