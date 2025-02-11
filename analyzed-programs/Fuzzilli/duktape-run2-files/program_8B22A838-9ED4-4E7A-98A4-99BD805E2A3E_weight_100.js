function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = undefined;
    this.e = undefined;
    this.b = undefined;
}
const v3 = new F1();
const v4 = new F1();
new F1();
const v8 = new Uint8ClampedArray(15);
const v11 = new Uint32Array(255);
v8[v11] = v4;
try { undefined(v8, 255, Uint32Array, Uint32Array); } catch (e) {}
v11[3224] %= 15;
for (let v15 = 0; v15 < 32; v15++) {
    v3["p" + v15] = v15;
}
new Float64Array(2871);
const t18 = 0;
t18.length = 0;
4 ^ 15;
1011639558 % -9223372036854775807;
