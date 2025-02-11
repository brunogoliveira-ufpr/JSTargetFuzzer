function f6(a7, a8, a9) {
    const o14 = {
        __proto__: "valueOf",
        "h": "valueOf",
        "g": 3.0,
        "b": "v",
        1: 3.0,
        "c": 817.6655752248821,
        get d() {
            try {
                super.setMonth("h", 817.6655752248821, -1000.0, a8);
            } catch(e12) {
            }
            this | this;
            return 3.0;
        },
    };
    return o14;
}
const v15 = f6("h", "v", "v");
f6(v15, f6(v15, "h", "valueOf"), "valueOf");
new Uint8ClampedArray(127);
const v23 = new Int16Array(3);
new Uint32Array(11);
const o27 = {
    ..."valueOf",
    "c": 11,
    "a": 127,
};
const o31 = {
    "apply": f6,
    "call": f6,
    "construct": f6,
    "defineProperty": f6,
    "deleteProperty": f6,
    "get": f6,
    "getOwnPropertyDescriptor": f6,
    "getPrototypeOf": f6,
    "isExtensible": f6,
    "ownKeys": f6,
    "preventExtensions": f6,
};
new Proxy(v23, o31);
