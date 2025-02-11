function f0() {
    const o8 = {
        "a": "__proto__",
        ["__proto__"]: -4294967297,
        __proto__: "__proto__",
        "f": -4294967297,
        "h": -4294967297,
        "b": "__proto__",
        get g() {
            const o5 = {
            };
            const v7 = new Proxy(this, o5);
            return v7;
        },
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
class C12 {
    static f;
    static #p(a14, a15) {
        v11[a15] = a14;
        return a15;
    }
    static set e(a17) {
        var g = a17;
        function F18(a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = v9;
            this.c = v9;
            this.h = f0;
        }
        const v23 = new F18(v11, a17, v11);
        new F18(v11, v23, v11);
        new F18(this, v23, v10);
    }
}
new C12();
const v27 = new C12();
const v28 = new C12();
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a31;
    this.d = C12;
    this.g = a31;
}
const v33 = new F29(v10, f0);
new F29(v27, v33);
new F29(v28, C12);
v27[Symbol.iterator] = v27;
const v39 = Symbol.iterator;
const o48 = {
    [v39]() {
        let v41 = 10;
        const o47 = {
            next() {
                v41--;
                const v45 = v41 == 0;
                const o46 = {
                    "done": v45,
                    "value": v41,
                };
                return o46;
            },
        };
        return o47;
    },
};
