function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -1073741824;
    this.b = -1073741824;
    this.c = -1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [-4.0,-4.0];
const v7 = [-Infinity,-7.034923354863521,-2.220446049250313e-16,-1.235605157462197e+308,-2.2250738585072014e-308,4.100343882414542,-1.492895591177219e+308,5.0,1.0,1e-15];
const v8 = [5.0];
function f9(a10, a11, a12) {
    const o13 = {
        ...v8,
        ...a10,
        __proto__: v6,
        ...v4,
        ...a12,
        "c": v7,
        "g": v8,
        "f": a11,
        "h": v6,
        ...v7,
        ...a12,
        208: v8,
    };
    return o13;
}
const v14 = f9(v4, v8, v8);
f9(v4, v7, v6);
const v16 = f9(v5, v6, v7);
f9(v3, v6, v7);
v3[562] = v14;
const o21 = {
    "g": v16,
    "a": v14,
};
try { o21.deref(F0); } catch (e) {}
const o23 = {
    "call": f9,
    "construct": f9,
    "defineProperty": f9,
    "deleteProperty": f9,
    "get": f9,
    "getOwnPropertyDescriptor": f9,
    "getPrototypeOf": f9,
    "has": f9,
    "ownKeys": f9,
    "preventExtensions": f9,
    "set": f9,
    "setPrototypeOf": f9,
};
new Proxy(v8, o23);
