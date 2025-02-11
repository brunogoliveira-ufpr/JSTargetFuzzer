const v8 = new Float64Array(5);
new Uint16Array(20);
new BigUint64Array(3371);
const o15 = {
    536870889: Float64Array,
    "f": v8,
};
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
