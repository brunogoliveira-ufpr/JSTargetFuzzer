function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
const v7 = new F3(F3, -19380);
const v8 = new F3(v7, -2147483648);
new F3(v7, -2147483648);
function f16(a17, a18, a19, a20) {
    const o21 = {
        "g": a19,
        "a": 257,
        "f": a18,
    };
    return o21;
}
const v22 = f16(v7, 2.220446049250313e-16, -19380, 53135);
f16(v8, 2.220446049250313e-16, -65535, -2147483648);
f16(v22, 0.5159703706633831, -2147483648, 257);
