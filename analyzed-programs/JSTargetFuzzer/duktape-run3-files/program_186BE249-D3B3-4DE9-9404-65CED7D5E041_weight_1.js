function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 38664;
    this.c = 38664;
    this.h = 38664;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
    this.e = a8;
    this.b = F0;
}
const v9 = new F6(v3);
const v10 = new F6(v5);
let v11 = new F6(v3);
class C12 {
    get d() {
        super.h |= v9;
        const v17 = -Infinity;
        let v18 = v11++;
        v11 % 4096;
        v18--;
        4096 / v11;
        return Math.pow(v17, 4096);
    }
}
new C12();
const v24 = new C12();
const v25 = new C12();
function f26(a27, a28, a29) {
    const o33 = {
        8: a28,
        get e() {
            for (let v31 = 0; v31 < 64; v31++) {
                v24[a29] = F0;
                new F6(v31);
            }
            a28.__proto__ = a29;
            return v25;
        },
        __proto__: a28,
        "d": a29,
        ...v3,
        "g": F0,
    };
    return o33;
}
f26(v3, v4, v4);
f26(v4, v5, v11);
const v36 = f26(v3, v5, C12);
v24.d;
const v40 = new Array(4);
delete v10[v3];
v40[11] %= v11;
const o42 = {
    "apply": Array,
    "construct": Array,
    "defineProperty": f26,
    "get": f26,
    "getOwnPropertyDescriptor": f26,
    "getPrototypeOf": f26,
    "has": f26,
    "isExtensible": Array,
    "set": f26,
};
new Proxy(v36, o42);
