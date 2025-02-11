function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 13;
    this.e = 13;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v5;
    this.e = v3;
}
new F6(v4, v5);
const v11 = new F6(v3, v5);
new F6(v3, v3);
new Uint32Array(7);
new Float64Array(7);
const v21 = new Int16Array(257);
v21[6];
const v25 = new Array(232);
const v26 = Array(232);
var d = v11;
v3[v25] = v4;
Array(232);
const v28 = v26;
function f29() {
    return Float64Array;
}
