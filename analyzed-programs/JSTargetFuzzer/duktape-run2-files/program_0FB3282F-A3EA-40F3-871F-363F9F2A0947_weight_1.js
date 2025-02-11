function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -570647003;
}
new F0();
new F0();
new F0();
new BigInt64Array(16);
new Int32Array(10);
const v14 = new Int16Array(3);
16 << F0;
const v17 = Symbol.unscopables;
v14[v17] = 10;
if (3 !== Int32Array) {
    new Uint32Array(3862);
    new Uint8ClampedArray(2955);
    new Int8Array(127);
} else {
    const v28 = v17;
    const v30 = Symbol.iterator;
    const o39 = {
        [v30]() {
            let v32 = 10;
            const o38 = {
                next() {
                    v32--;
                    const v36 = v32 == 0;
                    const o37 = {
                        "done": v36,
                        "value": v32,
                    };
                    return o37;
                },
            };
            return o38;
        },
    };
}
