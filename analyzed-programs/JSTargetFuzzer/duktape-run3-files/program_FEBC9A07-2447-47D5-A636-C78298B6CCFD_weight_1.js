function f3() {
    return -1024;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a7;
}
new F4(4294967295, 9);
const v9 = new F4(9, 9);
const v10 = new F4(-1024, 9);
function F21(a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a23;
    this.h = "V";
    this.g = a23;
}
new F21("object");
const v25 = new F21("object");
let v26 = new F21("V");
new F21("number");
v26[268435440] = 728.5353541590387;
const o34 = {
    "call": f3,
    "construct": f3,
    "deleteProperty": f3,
    "getPrototypeOf": f3,
    "has": f3,
    "isExtensible": f3,
    "ownKeys": f3,
    "preventExtensions": f3,
    "set": f3,
    "setPrototypeOf": f3,
};
new Proxy(v26, o34);
if (728.5353541590387) {
    v25[2334415265] = v26.a;
} else {
    const v38 = ("number")[1];
    const t38 = "object";
    t38[v38] /= v38;
    function F40(a42, a43) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a42;
        this.e = v10;
        this.a = a43;
    }
    const v44 = new F40(v38, v9);
    const v45 = new F40(F40, v44);
    new F40(v9, v45);
    new BigUint64Array(156);
    new Uint16Array(10);
    v25.__proto__;
    v38[f3] = v38;
    let v57 = 1819701843 || v26;
    const v58 = v57 * v57;
    --v57;
    const v60 = !1819701843;
    v60 >>> v60;
    v26 >> v58;
    v26++;
    new BigUint64Array(512);
}
