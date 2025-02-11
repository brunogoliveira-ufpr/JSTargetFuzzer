function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 12563;
    this.a = 12563;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new Int8Array(3565);
new Uint16Array(1430);
new Uint16Array(3346);
function f15(a16, a17, a18, a19) {
    const o20 = {
        [a19]: a16,
        ...v4,
        "h": a16,
    };
    return o20;
}
f15(v5, 3565, 3565, 1430);
f15(Int8Array, 3565, 1430, 1430);
f15(Uint16Array, 3346, 1430, 1430);
