function f0() {
}
const v3 = new BigInt64Array(4);
new BigInt64Array(10);
const v9 = new Float64Array(237);
[Float64Array,[237,237,v9,BigInt64Array],237];
[v3];
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
