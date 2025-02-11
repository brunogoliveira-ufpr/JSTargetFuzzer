function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65535;
    this.d = a5;
}
const v6 = new F3(9223372036854775807);
const v7 = new F3(0);
const v8 = new F3(9223372036854775807);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a14;
}
const v16 = new F12(v7, 0);
new F12(v16, 49394394);
new F12(v6, 4);
function f20(a21, a22) {
    const o25 = {
        "e": a22,
        m(a24) {
            return a22;
        },
        [a21]: a21,
        [9223372036854775807]: a21,
        __proto__: v8,
        "b": 4,
        "c": a22,
        [F12]: -9007199254740990,
    };
    return f20;
}
f20(f20);
f20(-9007199254740990);
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
}
let v34 = new F28();
v34--;
