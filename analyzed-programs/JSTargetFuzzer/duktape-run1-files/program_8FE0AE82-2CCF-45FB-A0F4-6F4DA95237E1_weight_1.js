let v2 = new Uint8Array(11);
new Int32Array(319);
new BigUint64Array(1437);
new BigUint64Array(2396);
new Float64Array(4035);
new Int8Array(4096);
const v18 = `
    v2 **= v2;
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
`;
eval(v18);
