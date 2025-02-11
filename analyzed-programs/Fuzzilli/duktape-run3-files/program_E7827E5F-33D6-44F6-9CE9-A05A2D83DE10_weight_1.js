const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v0;
    this.h = v0;
    this.e = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v7 = new WeakMap();
[-9.614428134776124e+307,-1000000.0,5.0,-Infinity,-595.3406403044239,334739.2148236786,514.2399672820952,2.434622185143919,-1000000000000.0];
const v9 = [-9.68919626645539e+307,-397.6635101451949];
[597851.8661536854,-5.0,1.1927458508036507e+308,-1.0,2.316197247583027];
function f11(a12, a13) {
    const o20 = {
        "a": v5,
        [v7]: a12,
        get h() {
            delete this[v9];
            [1073741825,1024,-296611238,-2147483647];
            [37649,36114,-924370784,-326626259];
            [9007199254740990,-51298];
            function f19() {
                return a12;
            }
            return a13;
        },
        "b": a12,
    };
    return o20;
}
f11(v7, v4);
f11(v3, v5);
f11(v3, v3);
try {
    const o24 = {
        "apply": f11,
        "call": f11,
        "construct": f11,
        "defineProperty": f11,
        "deleteProperty": f11,
        "get": f11,
        "getOwnPropertyDescriptor": f11,
        "has": f11,
        "isExtensible": f11,
        "ownKeys": f11,
        "preventExtensions": f11,
        "set": f11,
        "setPrototypeOf": f11,
    };
    new Proxy(v4, o24);
} finally {
    const o29 = {
        "maxByteLength": 128,
    };
    const v31 = new ArrayBuffer(128, o29);
    new BigInt64Array(v31);
}
