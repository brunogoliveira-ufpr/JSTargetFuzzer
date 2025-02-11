function f6(a7, a8) {
    const o15 = {
        __proto__: a7,
        [-9223372036854775807n]: -9223372036854775807n,
        [-2](a10, a11, a12, a13) {
            function f14() {
                return a13;
            }
            return -9223372036854775807n;
        },
        "b": -2147483649,
        "e": -2147483649,
    };
    return o15;
}
f6(1, -64325n);
f6(1, -64325n);
f6(-2147483649, -9223372036854775807n);
const v20 = Symbol.iterator;
const o29 = {
    [v20]() {
        let v22 = 10;
        const o28 = {
            next() {
                v22--;
                const v26 = v22 == 0;
                const o27 = {
                    "done": v26,
                    "value": v22,
                };
                return o27;
            },
        };
        return o28;
    },
};
