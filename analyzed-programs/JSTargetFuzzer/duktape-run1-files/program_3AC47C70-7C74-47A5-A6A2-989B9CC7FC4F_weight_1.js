new Uint8Array(8);
new Uint32Array(128);
new Float32Array(42);
class C9 extends Float32Array {
    static #p(a11, a12) {
        const v15 = Symbol.iterator;
        const o24 = {
            [v15]() {
                let v17 = 10;
                const o23 = {
                    next() {
                        v17--;
                        const v21 = v17 == 0;
                        const o22 = {
                            "done": v21,
                            "value": v17,
                        };
                        return o22;
                    },
                };
                return o23;
            },
        };
        return a11;
    }
}
new C9();
let v26 = new C9();
let v27 = new C9();
v27++;
let v33 = 62192;
v26++;
Math.hypot(v26);
v33--;
Math.atan(536870888);
