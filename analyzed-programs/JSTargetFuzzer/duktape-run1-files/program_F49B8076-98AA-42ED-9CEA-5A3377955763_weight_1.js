function f0() {
    const o17 = {
        [-5.0]: -12,
        "h": -91.07851512745913,
        __proto__: -5.0,
        "f": -5.0,
        o(a5, a6) {
            super.g = a5;
            this.h = a5 = -12;
            const v7 = a6?.d;
            new Int8Array(2991);
            new Uint32Array(249);
            new Uint32Array(5);
            return v7;
        },
    };
    return o17;
}
const v18 = f0();
const v19 = f0();
const v20 = f0();
function f21(a22, a23) {
    const o31 = {
        __proto__: a23,
        [v18]: f0,
        [v19]: a23,
        1373: f0,
        "b": v20,
        "a": a23,
        o(a25, a26, a27) {
            return a26;
        },
        "c": a23,
    };
    return o31;
}
const v32 = f21(v18, v20);
let v34 = f21(f21(v19, v19), v20);
new Set();
function F37(a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a40;
}
new F37(v20, f0, v32);
new F37(v18, Set, v32);
const v44 = new F37(v19, v34, v34);
const v45 = v44 >= v44;
for (const v46 in v19) {
    const o47 = {
        "c": v45,
        "f": v46,
    };
    v20[o47] %= o47;
}
v34 += v34[v20];
