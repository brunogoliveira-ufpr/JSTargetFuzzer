function f6(a7, a8, a9, a10) {
    const o17 = {
        [a10]: a8,
        [a9](a12, a13) {
            this.__proto__;
            a13[a7] = a9;
            -1862847413 === a7 ? -1862847413 : a7;
            return a9;
        },
        __proto__: 512,
        "d": 512,
        2147483649: a10,
    };
    return o17;
}
f6(10, 10000, -1862847413, 9007199254740991);
f6(10, 10000, 1959948174, 512);
f6(9007199254740991, 10, 10000, 10);
class C21 {
    static valueOf(a23, a24) {
        const v25 = (a26, a27) => {
            try { a27(a27, a26, a27, a26); } catch (e) {}
            return 10000;
        };
        return -1862847413;
    }
    a;
}
const v32 = new C21();
new C21();
let v34 = new C21();
v34 = v32;
for (let v35 = 0; v35 < 100; v35++) {
    const v37 = Symbol.iterator;
    const o46 = {
        [v37]() {
            let v39 = 10;
            const o45 = {
                next() {
                    v39--;
                    const v43 = v39 == 0;
                    const o44 = {
                        "done": v43,
                        "value": v39,
                    };
                    return o44;
                },
            };
            return o45;
        },
    };
}
