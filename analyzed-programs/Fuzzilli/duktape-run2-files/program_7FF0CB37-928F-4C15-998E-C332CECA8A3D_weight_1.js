function f0() {
    const o10 = {
        ...3.0,
        valueOf(a5, a6) {
            a5.valueOf = a5;
            const o7 = {
            };
            new Proxy(a5, o7);
            return a6;
        },
        65536: -9007199254740990,
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
class C14 extends f0 {
    [v12];
    h = f0;
    static [v13] = f0;
    static [v11] = v12;
    static 2;
    static [f0];
    static 214 = f0;
    static 254 = v12;
    2701571687 = v12;
    #g;
}
new C14();
new C14();
new C14();
const v22 = Symbol.iterator;
const o31 = {
    [v22]() {
        let v24 = 10;
        const o30 = {
            next() {
                v24--;
                const v28 = v24 == 0;
                const o29 = {
                    "done": v28,
                    "value": v24,
                };
                return o29;
            },
        };
        return o30;
    },
};
