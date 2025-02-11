const v0 = [];
function f4() {
    return v0;
}
new BigUint64Array(111);
new BigInt64Array(2);
new Float32Array(4047);
const v15 = Symbol.iterator;
const o24 = {
    [v15]() {
        let v17 = 10;
        const o23 = {
            next() {
                v17--;
                const v21 = v17 == 0;
                const o22 = {
                    "done": v21,
                    "value": v17,
                };
                return o22;
            },
        };
        return o23;
    },
};
