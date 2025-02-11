const v0 = [-2.220446049250313e-16,1e-15,-874.3169429017174];
const v1 = [0.0,0.013909100960373566,4.0,5.0];
const v2 = [0.6553642199083318,-1.0,-1.4717815923941005e+308];
function f3(a4, a5) {
    const o10 = {
        ...a4,
        "e": v0,
        set d(a7) {
            try {
                super.tan();
            } catch(e9) {
            }
        },
        10: v1,
        268435439: v0,
        "c": v2,
        ...v2,
    };
    return o10;
}
f3(v2, v1);
f3(v2, v1);
f3(v1, v0);
const o20 = {
    "apply": f3,
    "construct": f3,
    "defineProperty": f3,
    "getOwnPropertyDescriptor": f3,
    "getPrototypeOf": f3,
    "has": f3,
    "isExtensible": f3,
    "ownKeys": f3,
    "set": f3,
};
new Proxy(v0, o20);
