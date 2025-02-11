function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const t9 = "1618681482";
t9[52998] = v3;
v5.length = 127;
try { ("0LH").trimLeft(); } catch (e) {}
const o14 = {
    "b": v5,
    [1073741825]: v4,
};
v4[8] = o14;
v4.__proto__ = v3;
