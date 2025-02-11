function f6() {
    return "TQ";
}
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
