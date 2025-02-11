function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -12536;
    this.e = -12536;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = [[v5,F0,v3,v5],v5];
[v7,v3];
[-25838,11,16,-43755,36930,14];
[-2147483647,-12];
const v11 = [65537,65536,5500];
function f15(a16, a17, a18) {
    a16[7] = a17;
    v11.__proto__ = v4;
    return a18;
}
v7[f15(v5, 7, 8)] = v7;
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
