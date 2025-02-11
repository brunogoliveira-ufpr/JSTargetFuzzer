function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -2147483648;
    this.b = a9;
}
const v12 = new F6(-2147483649, 536870912, 9, -8);
new F6(-8, -37435, 536870912, 536870912);
new F6(536870912, 9, -2147483648, 9);
function f18(a19, a20) {
    const o21 = {
        [f18]: v12,
        [a19]: a19,
    };
    return o21;
}
f18(f18);
