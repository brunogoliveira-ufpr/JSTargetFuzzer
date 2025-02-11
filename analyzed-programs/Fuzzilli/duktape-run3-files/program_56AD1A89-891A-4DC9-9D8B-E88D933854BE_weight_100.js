const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v0;
    this.d = v0;
    this.c = v0;
}
new F1();
const v4 = new F1();
new F1();
const v14 = new URIError(1024);
new Uint32Array(29466);
const v20 = new Float32Array(16);
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    Uint32Array.h = Float32Array;
    this.d = v14;
}
new F21(1024, 1024, 29466);
new F21(v20, 1024, 29466);
new F21(URIError, 29466, 16, v4, Uint32Array, F1);
const v30 = new Float64Array(Float64Array, Float64Array, Float64Array);
let v32;
try { v32 = v30["ODpd"](v0); } catch (e) {}
for (const v33 in v32) {
}
