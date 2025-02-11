const v3 = [46306,127,-690034259,-12,1903027338];
const v4 = [16,-268435456,536870888,6,1000,6,127,-4294967296,-9007199254740990,9007199254740992];
const v5 = [-1368713273,1073741824];
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a9;
    this.f = a10;
}
const v12 = new F6(v4, v3, v3, 536870889);
new F6(v3, v4, v5, 268435441);
const v14 = new F6(v3, v4, v3, -65536);
function f15(a16, a17, a18, a19) {
    const o27 = {
        "d": a18,
        [v5](a21, a22, a23) {
            a16 *= v5;
            return a19;
        },
        "c": a18,
        870428161: a17,
        "h": v12,
        "g": v14,
    };
    return o27;
}
f15(v3, v4, 268435441, 536870889);
f15(v3, -65536, -65536, 268435441);
f15(v3, v12, 268435441, -65536);
new F6(v5, v4, v4, 536870889);
const v33 = Symbol.toPrimitive;
const o38 = {
    [v33]() {
        this[8] = v4;
        return -65536;
    },
};
