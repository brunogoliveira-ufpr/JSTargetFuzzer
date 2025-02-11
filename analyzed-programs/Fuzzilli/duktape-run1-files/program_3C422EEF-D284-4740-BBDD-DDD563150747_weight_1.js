function f3(a4) {
    const o11 = {
        __proto__: 1,
        "h": a4,
        "g": 1,
        [268435456](a6, a7) {
            let v8;
            try {
            const t0 = 1;
            v8 = t0(this);
            } catch (e) {}
            v8[Symbol.toStringTag] = a4;
            return a7;
        },
        "f": 536870887,
        6: a4,
    };
    return o11;
}
const v12 = f3(268435456);
const v13 = f3(1);
const v14 = f3(536870887);
const v15 = [268435456,536870887];
const v16 = [268435456,v15,536870887,v12];
const v17 = [v16,v14,268435456];
function f18(a19, a20, a21, a22) {
    const o29 = {
        [a22](a24, a25) {
            a24 >>>= a20;
            const v26 = v14 >= 536870887;
            super.c -= a24;
            v15.__proto__;
            v17 ^ v26;
            return a20;
        },
        __proto__: v15,
        ...v13,
        "g": 1,
        "d": a19,
    };
    return o29;
}
const v30 = f18(v15, v16, 536870887, 268435456);
f18(v15, v16, 268435456, 268435456);
f18(v16, v15, 536870887, 268435456);
let v39;
try { v39 = v30.p(536870887, f18, -22842, f3); } catch (e) {}
function f40() {
    return v39;
}
