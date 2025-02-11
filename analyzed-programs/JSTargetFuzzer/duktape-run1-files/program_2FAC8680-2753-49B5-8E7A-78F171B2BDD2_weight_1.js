class C3 {
    static #o(a5) {
        a5["2"] = this;
        const v7 = Symbol.iterator;
        const o16 = {
            [v7]() {
                let v9 = 10;
                const o15 = {
                    next() {
                        v9--;
                        const v13 = v9 == 0;
                        const o14 = {
                            "done": v13,
                            "value": v9,
                        };
                        return o14;
                    },
                };
                return o15;
            },
        };
        return this;
    }
}
new C3();
const v18 = new C3();
let v19 = new C3();
const v20 = [v18,v18,v18];
[[v20],v20,"2",0];
try { v19.n(313118523, 30651, 30651, 0); } catch (e) {}
for (const v27 of v20) {
    ++v19;
    v27.length = 5;
}
