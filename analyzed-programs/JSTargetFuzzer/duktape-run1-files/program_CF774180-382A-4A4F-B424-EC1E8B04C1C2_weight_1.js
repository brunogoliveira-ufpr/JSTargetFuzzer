new BigInt64Array(512);
let v4 = Int16Array;
const v5 = new v4(2);
new Float32Array(72);
let [] = v5;
--v4;
const v17 = Symbol.iterator;
const o26 = {
    [v17]() {
        let v19 = 10;
        const o25 = {
            next() {
                v19--;
                const v23 = v19 == 0;
                const o24 = {
                    "done": v23,
                    "value": v19,
                };
                return o24;
            },
        };
        return o25;
    },
};
