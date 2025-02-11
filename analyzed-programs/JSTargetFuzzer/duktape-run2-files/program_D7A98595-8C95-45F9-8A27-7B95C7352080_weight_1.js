function f3(a4, a5) {
    const o21 = {
        [a4]: a4,
        "a": a5,
        "g": 47913,
        ...a4,
        "h": a5,
        [a5](a7) {
            const v8 = super.d;
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = 47913;
            }
            new F12(a5, a4, 29675n, -1073741824n);
            new F12(-2147483648, 4294967296, F12, -9007199254740992n);
            new F12(a7, a7, v8, 29675n);
            return this;
        },
    };
    return o21;
}
const v22 = f3(47913, 4294967296);
f3(47913, 4294967296);
const v24 = f3(-2147483648, -2147483648);
let v29 = 11n;
for (const v31 in v22) {
    v24[v31] &= 4294967296;
}
v29 -= -1295554587n;
