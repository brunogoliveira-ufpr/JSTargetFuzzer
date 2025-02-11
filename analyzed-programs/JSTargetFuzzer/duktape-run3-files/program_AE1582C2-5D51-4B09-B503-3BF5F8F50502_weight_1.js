function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 268435456;
    this.h = 268435456;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.stack = v4;
    this.f = a9;
}
const v10 = new F6(v4, v3);
const v11 = new F6(v4, v5);
const v12 = new F6(v5, v3, F0, F6, F6);
function f13() {
    return v5;
}
const t19 = "toString";
v12[7] = delete t19[1073741823];
let v31;
try { v31 = v10["toString"](v3, 1000097820, v11, -2147483647, F6); } catch (e) {}
try { v12.asinh(v31, v5, v31); } catch (e) {}
v11[256] = F6;
v11.toString = f13;
268435456 ** -9007199254740991;
new f13();
function F36(a38, a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -2147483647;
}
new F36(19986, 256, -9007199254740991, -2147483647);
new F36(24080, 1687679073, 1073741825, 1687679073);
new F36(-9007199254740991, -9007199254740991, -3, 1073741825);
function f51(a52, a53) {
    const o54 = {
        "e": a52,
        __proto__: 256,
        "a": -3,
        [a53]: a52,
    };
    return a52;
}
const v55 = f51(-1, -1);
f51(-1, 11);
f51(-3, 24080, v55);
