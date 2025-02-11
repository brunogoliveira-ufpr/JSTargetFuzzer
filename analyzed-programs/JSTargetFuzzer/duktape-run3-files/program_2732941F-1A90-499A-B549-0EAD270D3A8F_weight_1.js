function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 12;
    this.b = 12;
    this.e = 12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12, a13) {
    const o19 = {
        8: v3,
        __proto__: a11,
        0: v5,
        [v5](a15, a16) {
            a11[3] = this;
            let [v17,v18] = a16;
            return v18;
        },
        "d": a10,
        ...v5,
        268435440: a13,
        ...a11,
    };
    return o19;
}
f9(-54053, v3, v5, -54053);
f9(-54053, v4, v5, -54053);
f9(-54053, v4, v5, -4294967295);
/(xyz?)/ivs;
/a{,}/isg;
/(Y)/disg;
let v29 = 0;
while (v29 < 6) {
    f9(v29, v5, v5, -54053);
    v29++;
}
