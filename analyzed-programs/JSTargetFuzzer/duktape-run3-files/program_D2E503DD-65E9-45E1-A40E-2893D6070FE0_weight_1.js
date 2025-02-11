const v0 = [6,-35909,-128,-1347510851,-4325,64,-4294967296,9007199254740991,65537,9];
const v1 = [-2059688333];
const v2 = [1024,13,3,9007199254740992,9,-9007199254740991,-23232];
class C3 {
    static {
        const o5 = {
        };
        const v7 = new Proxy(this, o5);
        v7.__proto__ = o5;
        try {
            super.reject(this, o5, o5);
        } catch(e9) {
        }
    }
    static e = v1;
    b;
    3 = v2;
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
const v13 = [1.7976931348623157e+308];
[2.0,-Infinity,1000000000.0,1000.0];
const v15 = [-7.1213233587389135,-2.0,NaN,2.0,974.1282152457525,5.118472375191692];
function f16(a17, a18) {
    const o24 = {
        get g() {
            try { a17(v15, a17, a17, v12, this); } catch (e) {}
            a17.f = a17;
            v15[50] >>= a17;
            return 39589;
        },
        [v13]: v0,
        "d": C3,
        "f": v11,
        "h": v1,
        __proto__: v15,
    };
    return o24;
}
const v25 = f16(v2, v10);
const v26 = f16(v13, v10);
const v27 = f16(v26, v11);
const v28 = f16(v1, v12);
v28 % v11;
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a35;
    this.e = v11;
    this.c = v28;
}
new F30(v27, v25, v25, v28);
new F30(v26, v26, v25, v13);
new F30(v28, v25, v28, v25);
