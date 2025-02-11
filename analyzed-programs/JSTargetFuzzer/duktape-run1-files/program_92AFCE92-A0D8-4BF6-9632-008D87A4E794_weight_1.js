class C3 {
    268435439 = 268435439;
    static p(a5, a6) {
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return a6;
    }
}
const v18 = new C3();
new C3();
new C3();
async function f24(a25, a26, a27) {
    const v30 = typeof a25 === "function";
    try { C3.p(4096n, v30, "function", -536870912); } catch (e) {}
    await v30;
    return v18;
}
const v33 = f24(536870889, 4096n, 268435439);
Object.defineProperty(v18, v33, { value: v33 });
