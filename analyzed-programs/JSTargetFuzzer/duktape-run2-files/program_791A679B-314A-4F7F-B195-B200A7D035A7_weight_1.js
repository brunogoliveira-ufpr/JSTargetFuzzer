function f12(a13, a14, a15, a16) {
    const o23 = {
        4200674009: a14,
        1: a15,
        [a14]: a15,
        "h": "d",
        "f": "d",
        ...a16,
        __proto__: "getTime",
        [a13](a18, a19) {
            for (let v20 = 0; v20 < 32; v20++) {
                a18["p" + v20] = v20;
            }
            return a15;
        },
    };
    return o23;
}
f12("getTime", 6, 6, "d");
f12("getTime", -3, 1, "getTime");
f12("getTime", 1, -5, "1");
let v28 = 2n;
for (let i32 = 0, i33 = 10; i32 < i33; i32++, i33--) {
    const t23 = "1";
    t23.length = i33;
    v28 -= -1n;
}
