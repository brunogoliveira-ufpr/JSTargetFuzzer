function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9223372036854775807;
    this.h = -9223372036854775807;
}
new F0();
new F0();
new F0();
function F15() {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F15();
function f18(a19, a20) {
    return a20;
}
const v22 = new ArrayBuffer(v17, v17);
new Uint16Array(v22);
const v25 = [-2035122715,-4294967295];
const v26 = [256];
const v27 = [-2836,-268435456,1024,13867];
f18(v17);
v26.g = f18;
try { v25.pop(Uint16Array, v22, v17); } catch (e) {}
const v30 = v27[10];
try { v30(v27, f18, Uint16Array); } catch (e) {}
