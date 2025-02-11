function f0() {
}
function f1() {
    return f0;
}
new Uint16Array(67);
const v7 = new Float64Array(16);
const v10 = new BigUint64Array(161);
v7.length;
v10[-1] = 2;
let v18;
try { v18 = v7.map(f0); } catch (e) {}
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2;
    this.h = f1;
    this.a = v18;
}
new F19(161, 9223372036854775807);
new F19(-15, 16);
new F19(9223372036854775807, -268435456);
