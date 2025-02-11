const v1 = new Date();
let v4 = "257";
function f5(a6, a7) {
    const o14 = {
        "c": "-47413",
        ..."f",
        ...Date,
        "g": Date,
        "a": a6,
        __proto__: Date,
        get f() {
            delete this[10];
            new Date(..."-47413", a6, ..."f", ...a6);
            return a6;
        },
        "h": Date,
    };
    return o14;
}
const v15 = f5("-47413", v4);
const v16 = f5(v4, "f");
const v17 = f5("-47413", v4);
function f21(a22, a23, a24, a25) {
    const o33 = {
        "c": v17,
        "d": v4,
        __proto__: a24,
        ["f"]: a25,
        "f": v1,
        "a": a23,
        set g(a27) {
            v4 ^= a27;
            super.e += 1;
        },
        ["f"](a29, a30) {
            this | this;
            Object.defineProperty(a23, 4294967295, { configurable: true, enumerable: true, set: Date });
            return a23;
        },
    };
    return o33;
}
f21(v4, v17, v16, -14);
f21(2, v17, v17, -14);
f21(-14, v4, v17, 2);
function f37(a38, a39) {
    try { a38.toString(a38); } catch (e) {}
    return f21;
}
f37(v1, v4);
const t49 = "-47413";
t49[8] = v15;
Object.defineProperty(v1, "b", { writable: true, enumerable: true, get: f37, set: f5 });
