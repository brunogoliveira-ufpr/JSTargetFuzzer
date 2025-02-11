function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2147483649;
    this.h = 2147483649;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9() {
    return 0;
}
class C10 extends f9 {
    [F0] = v5;
    f = 0;
    d = f9;
    constructor(a12, a13, a14, a15) {
        super();
        v4[a15] += a13;
    }
    static #h;
    [v3] = v3;
    h = v3;
    #f;
}
new C10(0, 62809, 0, v3);
const v17 = new C10(0, 0, 62809, v5);
const v18 = new C10(0, 0, 0, v4);
v3[v18] = v4;
const o19 = {
    __proto__: v17,
    "b": 0,
    "a": C10,
    ...v3,
};
o19[4] >>>= 62809;
new F0();
