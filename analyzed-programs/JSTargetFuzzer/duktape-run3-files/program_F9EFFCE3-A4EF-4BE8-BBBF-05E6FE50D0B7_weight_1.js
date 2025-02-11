function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9007199254740992;
    this.c = 9007199254740992;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v5;
}
new F6(v3);
new F6(v5);
new F6(v5);
function f18(a19, a20, a21) {
    const o22 = {
        1: 65535,
        [F0]: 65535,
        ...v5,
    };
    return o22;
}
f18(-7.441681051194681, 2147483648, -1.4969949187045217e+308);
f18(0.20131787633502507, 2147483648, -1.4969949187045217e+308);
f18(-1.4969949187045217e+308, 2147483648, -1.4969949187045217e+308);
