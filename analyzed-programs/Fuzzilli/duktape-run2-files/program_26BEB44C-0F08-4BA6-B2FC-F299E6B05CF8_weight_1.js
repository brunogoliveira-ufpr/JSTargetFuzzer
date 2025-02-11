function f0() {
    const o4 = {
        [-128]: 0.46911489598983147,
        "b": 0.46911489598983147,
        [0.46911489598983147]: -65537,
        "d": -65537,
        "c": -65537,
        "a": -65537,
        "e": -128,
        [-65537]: -65537,
        __proto__: -65537,
        536870888: -128,
        "f": -128,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
class C8 extends f0 {
    #a = f0;
    static m(a10, a11) {
        Object.defineProperty(this, this, { configurable: true, enumerable: true, get: f0 });
        v6.toString = f0;
        return a10;
    }
    #e;
    #c;
    static [v5] = v7;
    g = v6;
    static #d = v5;
}
new C8();
new C8();
new C8();
const o18 = {
    "call": f0,
    "construct": f0,
    "defineProperty": f0,
    "deleteProperty": f0,
    "getOwnPropertyDescriptor": f0,
};
new Proxy(v5, o18);
v6[0];
