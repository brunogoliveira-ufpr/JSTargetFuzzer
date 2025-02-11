let v0 = 257;
let v2 = -2147483649;
class C3 {
    n(a5, a6) {
        super.b;
        v2 = a6;
        v0 &= 128;
        const v9 = Symbol.iterator;
        const o18 = {
            [v9]() {
                let v11 = 10;
                const o17 = {
                    next() {
                        v11--;
                        const v15 = v11 == 0;
                        const o16 = {
                            "done": v15,
                            "value": v11,
                        };
                        return o16;
                    },
                };
                return o17;
            },
        };
        return v2;
    }
}
const v19 = new C3();
const v20 = new C3();
new C3();
const v22 = [v19];
const v23 = [v22,v22,C3,v22,C3];
[v0,v19,v22,v20,v23];
let {"length":v25,} = v23;
Math.asin(-589084385);
const v31 = v23 && (-4294967296 && v23);
try { v31.fill(v19); } catch (e) {}
for (let v33 = 0; v33 < 32; v33++) {
    v19["p" + v33] = v33;
}
