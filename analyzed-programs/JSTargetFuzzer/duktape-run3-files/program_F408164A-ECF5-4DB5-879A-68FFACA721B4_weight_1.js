const v5 = new Int16Array(1);
const v8 = new Uint8Array(3154);
const v11 = new Float32Array(7);
[] = v11;
delete v5[-24725];
v8["subarray"](7, 1);
const v16 = Symbol.iterator;
const o25 = {
    [v16]() {
        let v18 = 10;
        const o24 = {
            next() {
                v18--;
                const v22 = v18 == 0;
                const o23 = {
                    "done": v22,
                    "value": v18,
                };
                return o23;
            },
        };
        return o24;
    },
};
