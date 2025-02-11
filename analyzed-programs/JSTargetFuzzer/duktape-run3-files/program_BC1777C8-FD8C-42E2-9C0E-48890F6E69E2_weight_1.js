function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 257;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o11 = {
        "c": F0,
        "h": a7,
        "b": v4,
        ...v4,
        ...v3,
        [a7](a9) {
            v3[v3] %= a7;
            v4.toString = v3.b;
            return v3;
        },
        4294967295: a7,
    };
    return o11;
}
f6(v5);
f6(v4);
f6(v5);
[127,10];
[-31014,6,-536870912,268435440,-861412464,65537,19762,860606878,-65535];
[-1024,128,256,268435456];
function f21(a22, a23) {
    function F27(a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = a29;
    }
    new F27(a23, 9223372036854775807);
    new F27(a23, a22);
    new F27(a23, 2);
    return 2;
}
f21(9223372036854775807, v4);
