const v1 = new WeakMap();
function f2(a3, a4) {
    const o10 = {
        "h": a4,
        "g": v1,
        __proto__: v1,
        "f": a3,
        "e": v1,
        set d(a6) {
        },
    };
    return o10;
}
const v12 = f2(f2(f2, WeakMap), WeakMap);
f2(f2, WeakMap);
class C17 extends f2 {
    static 1073741824 = "if";
    [v12];
    static 206 = f2;
    static #f;
    valueOf(a19, a20) {
        try {
            this.#f;
        } catch(e22) {
        }
        try {
            const t26 = "unicode";
            t26.#f += f2;
        } catch(e23) {
        }
        return "if";
    }
}
new C17();
const v25 = new C17();
new C17();
for (let i28 = 0; i28 < 1; i28++) {
    const v36 = Symbol.match;
    v25[v36] = v36;
}
