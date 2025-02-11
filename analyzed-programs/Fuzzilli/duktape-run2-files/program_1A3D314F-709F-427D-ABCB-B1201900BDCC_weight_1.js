function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1073741824;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f12(a13, a14) {
    const o19 = {
        "f": -4.0,
        get a() {
            return -1901296213;
        },
        [a13]: v4,
        ...v4,
        "e": "KN",
        "b": a14,
        "h": v5,
        "g": a13,
        "c": "KN",
    };
    return o19;
}
f12(v4, 1000000000000.0);
f12(f12(v4, 1000000000000.0), 1000000000000.0);
Object.defineProperty("KN", "a", { get: f12, set: f12 });
const v24 = new Map();
if ("10" == -4.0) {
    new Uint8Array(8);
    new Uint16Array(255);
    new Uint8ClampedArray(3);
} else {
    v24.size;
}
