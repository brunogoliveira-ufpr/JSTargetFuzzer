const v4 = new Set();
function f5(a6) {
    const o7 = {
        [536870889]: 536870889,
        "b": a6,
        ...a6,
        ...a6,
        "h": 1087147506,
        "f": 24497,
        "a": a6,
        "d": a6,
        "c": a6,
        "e": a6,
        "g": 536870889,
        258: 536870889,
        __proto__: v4,
    };
    return o7;
}
const v8 = f5(24497);
const v10 = f5(f5(v8));
class C11 {
    static 257;
    static #e = v10;
    static set a(a13) {
        this.__proto__ = v8;
        v8[this] = a13;
        const o16 = {
            "maxByteLength": 129,
        };
        const v18 = new SharedArrayBuffer(2, o16);
        new DataView(v18);
    }
}
let v21 = new C11();
new C11();
new C11();
let v24;
try { v24 = v4.keys(); } catch (e) {}
new Set(v21);
v21 <<= v24;
const o29 = {
    "maxByteLength": 1073741823,
};
const v31 = new ArrayBuffer(13, o29);
new BigInt64Array(v31);
