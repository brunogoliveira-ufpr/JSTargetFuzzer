class C3 {
    #n(a5) {
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
        return o16;
    }
}
const v17 = new C3();
const v18 = new C3();
new C3();
function f20(a21, a22, a23, a24) {
    const o33 = {
        "h": a24,
        "c": a24,
        valueOf(a26, a27, a28, a29) {
            let v30;
            try { v30 = new a23(a29); } catch (e) {}
            a29 | -2147483648n;
            v30?.g;
            v17[this] *= a23;
            Object.defineProperty(a24, this, { configurable: true, value: a24 });
            return a29;
        },
        "g": a23,
        "a": a23,
        [2147483649n]: a21,
        ...a24,
    };
    return o33;
}
const v34 = f20(-2147483648n, v17, -2147483648n, C3);
const v35 = f20(2147483649n, v18, f20, v34);
const v36 = f20(2147483649n, v17, v35, v34);
[v36];
[v18];
[v18,v35,5n];
v36 & -2147483648n;
let v42 = 11;
Math.clz32(-463790987);
-463790987 & v34;
const v47 = --f20;
--v42;
f20 >>> v47;
