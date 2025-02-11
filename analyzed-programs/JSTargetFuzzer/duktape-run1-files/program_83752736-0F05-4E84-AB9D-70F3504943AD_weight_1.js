class C3 {
    e;
    ["vYLM"];
    constructor(a5) {
        super.c = Infinity;
        try {
            super.setDate(a5, this);
        } catch(e10) {
        }
    }
}
new C3("vYLM");
new C3("bigint");
const v13 = new C3("vYLM");
new Uint32Array(255);
const v19 = new Uint8Array(3);
new Int16Array(3);
v19 >>> [Int16Array,"number",[[v13]],"bigint","bigint"];
const v28 = Symbol.iterator;
const o37 = {
    [v28]() {
        let v30 = 10;
        const o36 = {
            next() {
                v30--;
                const v34 = v30 == 0;
                const o35 = {
                    "done": v34,
                    "value": v30,
                };
                return o35;
            },
        };
        return o36;
    },
};
