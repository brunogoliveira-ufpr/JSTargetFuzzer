class C3 {
    #e;
    static {
        try {
        const t0 = -1000.0;
        new t0(-1.7976931348623157e+308, this, this, "valueOf", this);
        } catch (e) {}
    }
    static #b;
    static #p(a7, a8) {
        new Uint8ClampedArray(1024);
        const v14 = new Int8Array(128);
        new Float64Array(3445);
        return v14;
    }
}
const v18 = new C3();
const v19 = new C3();
new C3();
function f21(a22, a23, a24, a25) {
    const o32 = {
        valueOf(a27, a28) {
            return a23;
        },
        "a": "valueOf",
        "f": a23,
        [a25]: a23,
        "h": -1000.0,
        3753: a25,
        [a24]: -1.7976931348623157e+308,
    };
    return o32;
}
const v33 = f21(v18, v19, v19, -1000.0);
const v34 = f21("valueOf", v19, v18, v18);
f21(v34, v34, C3, v33);
const v37 = new Map();
const v38 = delete v37[v18];
if (Map == v19) {
    C3 -= v19;
} else {
    let v41;
    try { v41 = v18.valueOf(f21); } catch (e) {}
    try { v41["valueOf"](v37, v19, "valueOf", "valueOf", v38); } catch (e) {}
}
