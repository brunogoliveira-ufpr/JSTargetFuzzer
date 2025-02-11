class C3 {
    #f;
    2 = "e";
    get b() {
        try {
            const t5 = "e";
            t5.#f = this;
        } catch(e5) {
        }
        return 934219.0040229145;
    }
    8;
    b;
    static c;
    static #c;
    static 6 = 934219.0040229145;
}
const v6 = new C3();
const v7 = new C3();
const v8 = new C3();
const v9 = [v8,C3];
const v10 = [v8];
[v10];
function f12(a13, a14, a15) {
    const o22 = {
        "d": 934219.0040229145,
        "e": a15,
        "a": C3,
        __proto__: a13,
        "h": v10,
        "f": a14,
        "b": "e",
        ..."e",
        [v6](a17, a18, a19, a20) {
            super.g;
            return a18;
        },
        "g": a13,
        [a13]: 934219.0040229145,
    };
    return o22;
}
const v24 = f12(f12(v7, v8, v10), v8, v6);
const v25 = f12(v6, v24, v7);
let v26;
try { v26 = ("e").toUpperCase(); } catch (e) {}
v9.length = v26;
const o27 = {
    "construct": f12,
    "deleteProperty": f12,
    "isExtensible": f12,
};
new Proxy(v24, o27);
v25 << v6;
