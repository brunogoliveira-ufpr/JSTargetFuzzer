new Uint8ClampedArray(2240);
new Uint8ClampedArray(255);
const v8 = new Uint16Array(868);
new Int32Array(151);
new Float64Array(226);
new Int32Array(128);
v8.__proto__;
Int32Array << Float64Array;
const v21 = Symbol.iterator;
const o30 = {
    [v21]() {
        let v23 = 10;
        const o29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                const o28 = {
                    "done": v27,
                    "value": v23,
                };
                return o28;
            },
        };
        return o29;
    },
};
