function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 6;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6(a7) {
    const o22 = {
        [v5](a9, a10) {
            const v12 = Symbol.iterator;
            const o21 = {
                [v12]() {
                    let v14 = 10;
                    const o20 = {
                        next() {
                            v14--;
                            const v18 = v14 == 0;
                            const o19 = {
                                "done": v18,
                                "value": v14,
                            };
                            return o19;
                        },
                    };
                    return o20;
                },
            };
            return F0;
        },
    };
    return o22;
}
const v23 = f6(v3);
f6(v5);
const v25 = f6(v3);
v5[5] = v23;
const v29 = v25[4096];
const v31 = Symbol.split;
const v32 = v5[v31];
class C33 extends f6 {
    [v29] = v32;
    static [v31];
    static h;
    #b;
    ["129"];
}
new C33();
new C33();
new C33();
