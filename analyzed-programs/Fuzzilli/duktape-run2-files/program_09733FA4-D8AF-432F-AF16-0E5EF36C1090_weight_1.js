function f0() {
}
function f10(a11, a12) {
    const o22 = {
        "a": a12,
        "g": "c",
        ..."nn",
        get b() {
            const o17 = {
                "maxByteLength": 4005190547,
            };
            const v19 = new SharedArrayBuffer(237, o17);
            new BigInt64Array(v19);
            return v19;
        },
    };
    return o22;
}
f10(59257, 59257);
f10(4294967296, 1166655700);
f10(1166655700, 4294967296);
new Int16Array(1876);
new Int8Array(1);
new Uint8Array(4);
Int8Array - 5n;
const o39 = {
    "apply": f10,
    "call": f0,
    "construct": f10,
    "get": f0,
    "has": f0,
    "isExtensible": f10,
    "preventExtensions": f0,
    "set": f10,
};
new Proxy("nn", o39);
