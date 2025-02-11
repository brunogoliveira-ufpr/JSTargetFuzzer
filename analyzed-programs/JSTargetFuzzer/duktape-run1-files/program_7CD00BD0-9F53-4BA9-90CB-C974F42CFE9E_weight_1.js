new BigUint64Array(130);
new Int16Array(256);
new Float32Array(237);
-Infinity;
~237;
-7.012962574488767e+307 * -7.012962574488767e+307;
~2120244968;
-"undefined";
const v25 = Symbol.iterator;
const o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
