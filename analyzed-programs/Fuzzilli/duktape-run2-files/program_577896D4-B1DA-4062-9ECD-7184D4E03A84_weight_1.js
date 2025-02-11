function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
    this.h = a14;
    this.c = 536870889;
}
const v15 = new F9(9007199254740991, 8, -536870912, 9);
const v16 = new F9(8, F9, 1073741824, 822332559);
const v17 = new F9(106687693, 9, 8, -536870912);
const t9 = 10000;
t9[4] = v15;
function f21(a22, a23, a24) {
    const o25 = {
        "a": 9,
        "f": v17,
        "c": a22,
        "b": a23,
    };
    return o25;
}
f21(8, v16, 65535);
f21(-256, v16, 9);
f21(5, v16, f21);
