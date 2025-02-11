function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1939725671;
    this.h = 1939725671;
}
const v3 = new F0();
new F0();
new F0();
new Uint32Array(27);
new Uint8ClampedArray(3);
new BigInt64Array(7);
v3[113] = Uint32Array;
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
