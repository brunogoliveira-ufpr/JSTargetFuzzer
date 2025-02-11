const v0 = [-41209];
const v1 = [23435,12949,-54426,32184,5,1358059484,-9223372036854775807];
const v2 = [-1178];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    this.f = a5;
    this.g = a6;
}
const v7 = new F3(v2, v1);
const v8 = new F3(v0, F3);
new F3(v1, v8);
function f13(a14, a15, a16) {
    const o28 = {
        m(a18, a19, a20) {
            function f21(a22, a23) {
                a22.a %= -86817234;
                return a18;
            }
            f21(a16, v8);
            return v1;
        },
        "d": -86817234,
    };
    return o28;
}
f13(v2, v8, -415585981);
f13(v2, v7, -86817234);
const v31 = f13(v0, v7, -86817234);
const o32 = {
    "apply": f13,
    "call": f13,
    "construct": f13,
    "defineProperty": f13,
    "get": f13,
    "getOwnPropertyDescriptor": f13,
    "getPrototypeOf": f13,
    "has": f13,
    "isExtensible": f13,
    "preventExtensions": f13,
    "setPrototypeOf": f13,
};
new Proxy(v31, o32);
