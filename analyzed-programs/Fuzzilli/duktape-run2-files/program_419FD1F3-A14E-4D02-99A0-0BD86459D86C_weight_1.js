function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740991;
    this.a = -9007199254740991;
    this.d = -9007199254740991;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v3;
}
const v9 = new F6(v5);
const v10 = new F6(v3);
const v11 = new F6(v5);
function f15(a16, a17, a18, a19) {
    const o26 = {
        [-4294967297]: v10,
        o(a21, a22, a23, a24) {
            const v25 = v5;
            return F0;
        },
        9: 57236,
        128: v4,
        [-1]: a17,
        "a": v4,
        ...a16,
        "c": -2,
        ...a18,
        ...v10,
    };
    return o26;
}
f15(v5, v10, v9, v4);
f15(v4, v9, v11, v5);
const v29 = f15(v3, v10, v11, v3);
const v31 = Symbol.unscopables;
v29[v31] = v4;
class C32 {
    static #b;
    [F0] = v31;
    d;
    g;
}
new C32();
new C32();
new C32();
