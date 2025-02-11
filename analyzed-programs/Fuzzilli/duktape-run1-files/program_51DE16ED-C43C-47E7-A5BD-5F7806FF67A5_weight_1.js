new Uint8ClampedArray(228);
new Int16Array(2707);
new Uint32Array(4096);
"string" & 536870888;
for (let v16 = 0; v16 < 32; v16++) {
    const t5 = "string";
    t5["p" + v16] = v16;
}
const o21 = {
    "call": CBOR.encode,
    "construct": CBOR.encode,
    "defineProperty": CBOR.encode,
    "deleteProperty": CBOR.encode,
    "getOwnPropertyDescriptor": CBOR.encode,
    "has": CBOR.encode,
    "isExtensible": CBOR.encode,
    "set": CBOR.encode,
    "setPrototypeOf": CBOR.encode,
};
new Proxy("string", o21);
