function f3() {
    return 128;
}
const v5 = new WeakSet();
const v7 = new WeakSet();
class C8 {
    static [v5] = -57507;
    static f = f3;
    m(a10, a11, a12, a13) {
        a13 = 128;
        return v7;
    }
    static b = -57507;
}
new C8();
new C8();
new C8();
function f20(a21, a22) {
    v5[Symbol.species];
    const v27 = Symbol.iterator;
    const o36 = {
        [v27]() {
            let v29 = 10;
            const o35 = {
                next() {
                    v29--;
                    const v33 = v29 == 0;
                    const o34 = {
                        "done": v33,
                        "value": v29,
                    };
                    return o34;
                },
            };
            return o35;
        },
    };
    return a22;
}
f20(-57507, 128);
