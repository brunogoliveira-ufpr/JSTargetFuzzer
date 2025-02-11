new Int32Array(194);
new Int8Array(16);
const v8 = new Int16Array(2);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = Int32Array;
}
const v13 = new F9(16, 194);
new F9(2, 2);
new F9(2, 16);
v13.c = v8;
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
