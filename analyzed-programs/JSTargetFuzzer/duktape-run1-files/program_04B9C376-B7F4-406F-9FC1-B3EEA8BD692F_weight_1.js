function f3(a4, a5) {
    const o17 = {
        [a5]: a5,
        ...127,
        "a": a5,
        p(a7) {
            function f8(a9, a10, a11, a12) {
                const o13 = {
                    ...this,
                    "g": 127,
                };
                return o13;
            }
            f8(a7, a4, a7, a7);
            f8(11, a5, 11, 127);
            f8(a5, a7, a4, 127);
            return 11;
        },
    };
    return o17;
}
let v18 = f3(11, 127);
const v19 = f3(4294967296, 11);
const v20 = f3(127, 11);
if (v18 !== 4) {
    f3 - -256;
    try { v19.p(); } catch (e) {}
    v18 = v20;
} else {
    v19[10000] = 4;
}
f3(127, 4294967296);
try { v18.p(v19, 4); } catch (e) {}
