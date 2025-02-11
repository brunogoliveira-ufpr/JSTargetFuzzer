function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.a = f0;
    this.b = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
class C6 extends f0 {
    b = f0;
    #h = f0;
    m(a8, a9) {
        const v11 = Symbol.iterator;
        const o20 = {
            [v11]() {
                let v13 = 10;
                const o19 = {
                    next() {
                        v13--;
                        const v17 = v13 == 0;
                        const o18 = {
                            "done": v17,
                            "value": v13,
                        };
                        return o18;
                    },
                };
                return o19;
            },
        };
        return a9;
    }
}
new C6();
new C6();
new C6();
const v29 = new BigInt64Array(16);
new Float64Array(512);
new BigInt64Array(3);
function f36(a37, a38) {
    const o39 = {
        2733: 16,
        "d": a37,
        "f": BigInt64Array,
        __proto__: v3,
        8: v29,
    };
    return o39;
}
f36(f36, v5);
f36(f36, C6);
f36(Float64Array, v4);
