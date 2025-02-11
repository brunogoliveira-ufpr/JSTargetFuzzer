function f3(a4, a5) {
    const o6 = {
        "b": a5,
        "d": 17922,
        "g": 17922,
        __proto__: 17922,
        "f": a4,
        "h": 4294967296,
        [a4]: a4,
        [a5]: 97562949,
        "a": 4294967296,
        3178: a5,
        "e": 4294967296,
    };
    return o6;
}
f3(17922, 17922);
const v8 = f3(17922, 97562949);
f3(4294967296, 17922);
new Float64Array(2186);
new BigInt64Array(155);
new Float32Array(64);
v8[1];
const v21 = Symbol.iterator;
const o30 = {
    [v21]() {
        let v23 = 10;
        const o29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                const o28 = {
                    "done": v27,
                    "value": v23,
                };
                return o28;
            },
        };
        return o29;
    },
};
