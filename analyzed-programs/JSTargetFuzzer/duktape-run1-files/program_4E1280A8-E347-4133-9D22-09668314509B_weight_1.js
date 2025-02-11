function f0() {
    const o8 = {
        "f": 4294967297,
        p(a5) {
            a5.valueOf = a5;
            try {
                super.all(a5, this, this, 1527203646, this);
            } catch(e7) {
            }
            return 9;
        },
        __proto__: 9,
        "b": 9,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
f0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v9;
    this.f = a14;
}
const v16 = new F12(v10, v10);
const v17 = new F12(v9, v9);
const v18 = new F12(v9, v9);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a21;
    this.f = v16;
}
const v23 = new F19(v18, v17);
const v24 = new F19(v18, v23);
new F19(v24, v23);
const v27 = Symbol.iterator;
const o36 = {
    [v27]() {
        let v29 = 10;
        const o35 = {
            next() {
                v29--;
                const v33 = v29 == 0;
                const o34 = {
                    "done": v33,
                    "value": v29,
                };
                return o34;
            },
        };
        return o35;
    },
};
