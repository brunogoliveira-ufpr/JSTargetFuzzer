function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return f4;
    }
    f4();
}
new F2();
function f8(a9, a10) {
    const o14 = {
        toString(a12, a13) {
            return 177;
        },
    };
    return o14;
}
const v15 = f8();
const v16 = f8(f8, v15);
const t18 = f8();
t18[v16] = v15;
function f19() {
    return -1024;
}
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a23;
}
new F20(4294967295, 9);
const v25 = new F20(9, 9);
const v26 = new F20(-1024, 9);
function F37(a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a39;
    this.h = "V";
    this.g = a39;
}
new F37("object");
const v41 = new F37("object");
let v42 = new F37("V");
new F37("number");
v42[268435440] = 728.5353541590387;
const o50 = {
    "call": f19,
    "construct": f19,
    "deleteProperty": f19,
    "getPrototypeOf": f19,
    "has": f19,
    "isExtensible": f19,
    "ownKeys": f19,
    "preventExtensions": f19,
    "set": f19,
    "setPrototypeOf": f19,
};
new Proxy(v42, o50);
if (728.5353541590387) {
    v41[2334415265] = v42.a;
} else {
    const v54 = ("number")[1];
    const t58 = "object";
    t58[v54] /= v54;
    function F56(a58, a59) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a58;
        this.e = v26;
        this.a = a59;
    }
    const v60 = new F56(v54, v25);
    const v61 = new F56(F56, v60);
    new F56(v25, v61);
    new BigUint64Array(156);
    new Uint16Array(10);
    v41.__proto__;
    v54[f19] = v54;
    let v73 = 1819701843 || v42;
    const v74 = v73 * v73;
    --v73;
    const v76 = !1819701843;
    v76 >>> v76;
    v42 >> v74;
    v42++;
    new BigUint64Array(512);
}
