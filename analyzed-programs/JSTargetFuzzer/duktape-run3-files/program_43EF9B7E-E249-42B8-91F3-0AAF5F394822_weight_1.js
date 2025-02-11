function f9(a10, a11, a12, a13) {
    const o22 = {
        [a11](a15, a16, a17, a18) {
            const o19 = {
            };
            const v21 = new Proxy(a10, o19);
            return v21;
        },
        __proto__: a10,
        ...a10,
        ...a10,
        "h": a13,
    };
    return o22;
}
f9(1, -9007199254740990, 9576, 8);
const v24 = f9(512, 9576, 37075213, 512);
f9(9576, 512, 1073741825, 8);
function* f26(a27, a28) {
    const v29 = a28[1977558244];
    for (let v30 = 0; v30 < 32; v30++) {
        v29["p" + v30] = v30;
    }
    yield 1073741825;
    return a27;
}
f26(1, v24);
