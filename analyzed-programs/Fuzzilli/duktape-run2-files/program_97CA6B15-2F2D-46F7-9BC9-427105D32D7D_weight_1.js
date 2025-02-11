const v5 = new WeakSet();
function f6(a7, a8, a9) {
    const o19 = {
        n(a11, a12, a13, a14) {
            super.e;
            return v5;
        },
        "h": 9.448102581716192,
        "g": WeakSet,
        1: 9.448102581716192,
    };
    return o19;
}
f6(9.448102581716192, 5.0, 9.448102581716192);
const v21 = f6(v5, 5.0, 5.0);
f6(WeakSet, f6, 5.0);
const o23 = {
    __proto__: v21,
    "f": 303.9223699865822,
    "d": f6,
    "b": undefined,
};
v5.g;
const v26 = Symbol.iterator;
const o35 = {
    [v26]() {
        let v28 = 10;
        const o34 = {
            next() {
                v28--;
                const v32 = v28 == 0;
                const o33 = {
                    "done": v32,
                    "value": v28,
                };
                return o33;
            },
        };
        return o34;
    },
};
