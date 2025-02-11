function f3(a4) {
    const o12 = {
        1733221823: -9007199254740991n,
        __proto__: 1186949352n,
        "b": a4,
        get e() {
            let v6;
            try {
            const t0 = -39881n;
            v6 = new t0(1186949352n, this, a4, a4);
            } catch (e) {}
            try { v6(v6); } catch (e) {}
            return a4;
        },
        ...-39881n,
        "e": a4,
        "f": 1186949352n,
    };
    return o12;
}
const v13 = f3(-9007199254740991n);
const v14 = f3(-9007199254740991n);
const v15 = f3(-9007199254740991n);
class C22 {
    h;
    p(a24, a25, a26, a27) {
        const v28 = v15.constructor;
        class C29 extends v28 {
            static [a24];
            static [v28] = v13;
            1172;
        }
        new C29();
        return 268435440n;
    }
    [-9007199254740991n] = 7n;
    static [v14];
    static #b;
    #e = -2147483649n;
}
new C22();
new C22();
new C22();
const o34 = {
    "apply": f3,
    "call": f3,
    "construct": f3,
    "defineProperty": f3,
    "deleteProperty": f3,
    "get": f3,
    "getOwnPropertyDescriptor": f3,
    "has": f3,
    "isExtensible": f3,
    "ownKeys": f3,
    "preventExtensions": f3,
    "set": f3,
    "setPrototypeOf": f3,
};
new Proxy(v14, o34);
