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
    this.e = v4;
    this.f = a9;
}
const v10 = new F6(v4, v3);
const v11 = new F6(v4, v5);
const v12 = new F6(v5, v3);
function f13() {
    return v5;
}
let v27;
try { v27 = v10["toString"](v3, 1000097820, v11, -2147483647, F6); } catch (e) {}
try { v12.asinh(v27, v5, v27); } catch (e) {}
v11[256] = F6;
v11.toString = f13;
function f36(a37, a38) {
    const o39 = {
        "e": a37,
        __proto__: 256,
        "a": -3,
        [a38]: a37,
    };
    return a37;
}
f36(-1, -1);
f36(-1, 11);
f36(-3, 24080);
