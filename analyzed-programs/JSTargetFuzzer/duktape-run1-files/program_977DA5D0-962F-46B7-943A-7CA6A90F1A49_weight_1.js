function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.f = a6;
}
const v7 = new F3(536870888, 1073741824);
new F3(536870888, 536870888);
new F3(536870888, 536870888);
new Int16Array(1000);
const v15 = new Uint16Array(13);
new Uint8Array(3239);
Uint8Array && 13;
v15[0];
function* f21(a22, a23) {
    yield v15.__proto__;
    return Int16Array;
}
const v26 = f21(1693880213, v7);
const o27 = {
    "apply": f21,
    "call": f21,
    "deleteProperty": f21,
    "get": f21,
    "getOwnPropertyDescriptor": f21,
    "getPrototypeOf": f21,
    "has": f21,
    "isExtensible": f21,
    "ownKeys": f21,
    "set": f21,
    "setPrototypeOf": f21,
};
new Proxy(v26, o27);
