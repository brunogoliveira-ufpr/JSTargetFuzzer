function f6(a7, a8, a9, a10) {
    const o15 = {
        __proto__: a10,
        "f": 2.2250738585072014e-308,
        "b": 2.2250738585072014e-308,
        "e": 2.2250738585072014e-308,
        "c": a7,
        5: a10,
        "h": a8,
        get a() {
            this[257] = this;
            this[10000] <<= -2.220446049250313e-16;
            a10.length = 2;
            let v13;
            try { v13 = new a10(2, a10, a10, -2.220446049250313e-16); } catch (e) {}
            return v13?.[6];
        },
    };
    return o15;
}
const v16 = f6(2.2250738585072014e-308, 16211, 9352, 0.41718689021062927);
f6(-2.220446049250313e-16, 16211, -13, v16);
f6(0.41718689021062927, 9352, 16211, v16);
new Int8Array(7);
const v24 = new BigUint64Array(3204);
new Float64Array(1024);
const o28 = {
    "call": f6,
    "construct": f6,
    "defineProperty": f6,
    "deleteProperty": f6,
    "get": f6,
    "getOwnPropertyDescriptor": f6,
    "getPrototypeOf": f6,
    "has": f6,
    "isExtensible": f6,
    "ownKeys": f6,
    "preventExtensions": f6,
    "setPrototypeOf": f6,
};
new Proxy(v24, o28);
