function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -2070556878;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static m(a8) {
        const o9 = {
        };
        new Proxy(F0, o9);
        const v12 = delete v4?.f;
        v3[v12] >>>= v12;
        return v12;
    }
    10;
    constructor(a14, a15) {
        super();
        a15[1] = v5;
        function f16() {
            return a14;
        }
        Object.defineProperty(v5, f16, { configurable: true, get: f16, set: f16 });
        try { this["toString"](F0, "toString"); } catch (e) {}
    }
}
const v19 = new C6(F0, v3);
const v20 = new C6(C6, F0);
const v21 = new C6(v4, v19);
const v27 = new Uint8Array(86);
const v30 = new Uint8Array(3517);
const v33 = new Int8Array(128);
const v35 = [v3,Int8Array,-7.225881264237319,v21,[v5,v27,v4,v33]];
[v19];
var f = v35;
v4 >>= v30;
const o37 = {
    "e": 1.6218487371745122e+308,
    "h": v20,
    831402790: 128,
    __proto__: v19,
};
