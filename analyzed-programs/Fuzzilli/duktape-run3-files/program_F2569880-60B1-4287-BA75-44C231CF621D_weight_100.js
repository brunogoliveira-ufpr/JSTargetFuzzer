new Uint32Array(3413);
new Float32Array(2751);
new Int16Array(1160);
const v17 = new Int16Array(1024);
new Uint32Array(10);
const v23 = new Float32Array(1683);
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    a27.h = Float32Array;
    v23.d = v17;
}
new F24(1024, 1024, 10);
new F24(v23, 1024, 10);
new F24(Int16Array, 10, 1683);
const v33 = new Float64Array(Float64Array, Float64Array, Float64Array);
let v35;
try { v35 = v33["n"](); } catch (e) {}
for (const v36 in v35) {
}
