const v2 = new Uint8ClampedArray(2);
const v5 = new Float64Array(9);
const v8 = new Int16Array(257);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v2;
}
let v13 = new F9(257, Uint8ClampedArray);
const v14 = new F9(9, v8);
const v15 = new F9(2, 9);
v13 = v15;
let v17;
try { v17 = v14["n"](v14, v5, 9, v5, F9); } catch (e) {}
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "n";
    this.f = a20;
}
new F18(v13, 9, v17);
new F18(v14, 257, 9);
new F18(v14, 2, v17);
