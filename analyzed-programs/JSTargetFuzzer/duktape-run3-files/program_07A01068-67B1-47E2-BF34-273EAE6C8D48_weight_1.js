function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 255;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9() {
    return F0;
}
function f10() {
    return v4;
}
new f9();
function f15(a16, a17) {
    const o18 = {
        "a": 1073741823,
        "h": -128,
        "g": v3,
        [f10]: v4,
        "f": a16,
    };
    return o18;
}
f15(v4, 1073741823);
f15(v4, v5);
f15(v4, f9);
