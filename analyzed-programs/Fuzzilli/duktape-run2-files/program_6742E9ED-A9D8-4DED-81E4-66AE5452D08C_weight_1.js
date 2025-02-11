function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -15;
    this.e = -15;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6() {
    return v3;
}
class C10 {
    static g = v5;
    static p(a12, a13, a14) {
        const o17 = {
            "maxByteLength": 5,
        };
        const v19 = new SharedArrayBuffer(5, o17);
        const v21 = new Uint8Array(v19);
        return v21;
    }
}
new C10();
const v23 = new C10();
const v24 = new C10();
function f28() {
    return v23;
}
Math.log2(v24);
Math.tanh(v24);
--f28;
Math.asinh(f28);
~7;
7 + f28;
f28--;
