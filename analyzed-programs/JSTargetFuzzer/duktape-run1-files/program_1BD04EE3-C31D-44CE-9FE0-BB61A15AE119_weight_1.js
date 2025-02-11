const v3 = [45418,45418];
[v3,v3,-16];
[-16,45418,v3];
new Int16Array(16);
new Int16Array(3);
const v17 = new Uint8ClampedArray(512);
let v18;
try { v18 = Int16Array(v17, 3, 3); } catch (e) {}
function f19(a20) {
    arguments[v3];
    return arguments;
}
const v24 = f19(45418, 4294967295n, Uint8ClampedArray, Int16Array, 512);
v18[4294967295] = v24;
const o25 = {
    "call": f19,
    "construct": f19,
    "defineProperty": f19,
    "deleteProperty": f19,
    "getOwnPropertyDescriptor": f19,
    "getPrototypeOf": f19,
    "has": f19,
    "isExtensible": f19,
    "preventExtensions": f19,
    "set": f19,
    "setPrototypeOf": f19,
};
new Proxy(v24, o25);
