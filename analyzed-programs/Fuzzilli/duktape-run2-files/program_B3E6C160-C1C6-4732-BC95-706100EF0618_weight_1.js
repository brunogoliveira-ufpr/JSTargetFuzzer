function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
    this.c = "sticky";
    this.g = a5;
}
const v7 = new F3("p", "sticky");
new F3("d", "p");
new F3("d", "p");
new Uint16Array(0);
new Uint8Array(8);
new Uint16Array(1792);
const v19 = async (a20, a21, a22) => {
    const v23 = !a22;
    arguments[9] = v7;
    await v7;
    return v23;
};
const o26 = {
    "apply": v19,
    "call": v19,
    "construct": v19,
    "defineProperty": v19,
    "deleteProperty": v19,
    "get": v19,
    "getOwnPropertyDescriptor": v19,
    "getPrototypeOf": v19,
    "has": v19,
    "isExtensible": v19,
    "ownKeys": v19,
    "preventExtensions": v19,
    "set": v19,
};
new Proxy("sticky", o26);
