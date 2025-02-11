function f3(a4) {
    const o8 = {
        0: 1073741824,
        10: a4,
        11: -91788931,
        ...a4,
        "b": -9007199254740992,
        __proto__: a4,
        set g(a6) {
            this.b;
        },
        ...a4,
        ...a4,
    };
    return o8;
}
const v9 = f3(1073741824);
const v10 = f3(v9);
f3(v10);
new WeakMap();
class C17 {
    static #d;
    a = v9;
    static [f3] = v10;
}
new C17();
new C17();
new C17();
f3(C17);
