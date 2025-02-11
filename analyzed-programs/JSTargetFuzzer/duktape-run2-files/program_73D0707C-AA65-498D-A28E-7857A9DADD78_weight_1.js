function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
    this.b = -1180398519n;
    this.a = v4;
}
const v15 = new F9(F9, -1180398519n, v3, v4);
const v16 = new F9(v15, 268435439n, v4, v15);
const v17 = new F9(v16, -1180398519n, v16, v4);
for (const v18 in v17) {
    v4.h = BigInt64Array;
    v4.a |= v16;
}
v15[F9];
const v25 = Symbol.iterator;
const o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
