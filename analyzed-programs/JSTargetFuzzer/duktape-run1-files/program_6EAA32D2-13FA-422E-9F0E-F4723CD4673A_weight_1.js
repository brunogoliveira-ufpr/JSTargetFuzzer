function f0() {
}
function f1() {
    return f0;
}
function f2(a3, a4) {
    const o10 = {
        "g": f0,
        valueOf(a6) {
            const v8 = a6 <= this ? a6 : this;
            v8 - v8;
            super.e ||= a3;
            return this;
        },
        "a": f1,
        "d": a4,
        "f": f1,
    };
    return o10;
}
const v11 = f2(f0, f1);
const v12 = f2(f1, v11);
f2(f2, f0);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a19;
}
const v21 = new F17(-256n, v11);
new F17(v21, v12);
const v23 = new F17(f2, v11);
f2(v12, v23);
-Infinity;
const v29 = Symbol.iterator;
const o38 = {
    [v29]() {
        let v31 = 10;
        const o37 = {
            next() {
                v31--;
                const v35 = v31 == 0;
                const o36 = {
                    "done": v35,
                    "value": v31,
                };
                return o36;
            },
        };
        return o37;
    },
};
