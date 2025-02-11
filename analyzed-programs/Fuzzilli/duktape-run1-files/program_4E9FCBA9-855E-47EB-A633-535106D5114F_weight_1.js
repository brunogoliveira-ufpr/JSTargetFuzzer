function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a12;
    this.e = -431940449;
    this.c = -32445;
}
const v13 = new F9(-32445, -431940449);
const v14 = new F9(-2147483647, -431940449);
const v15 = new F9(-32445, 0.31166522914425643);
function f16(a17, a18, a19, a20) {
    const o24 = {
        "f": a20,
        [a17]: 42890,
        get d() {
            let v21 = this;
            v21 &= v21;
            v21 >>= v21;
            try {
                super.startsWith(42890);
            } catch(e23) {
            }
            return a18;
        },
        "b": F9,
        __proto__: a18,
        "e": a17,
    };
    return o24;
}
f16(42890, v14, -778.6234423138166, 0.0);
const v26 = f16(-2147483647, v14, 42890, 0.0);
f16(-2147483647, v13, 42890, 0.0);
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a31;
    this.g = v26;
}
const v33 = new F28(2147483649, v26, -2147483647);
new F28(-431940449, v14, F9);
const v35 = new F28(-32445, v33, -32445);
f16(-431940449, v15, v35, 0.0);
-778.6234423138166 in v35;
v13[0.0];
