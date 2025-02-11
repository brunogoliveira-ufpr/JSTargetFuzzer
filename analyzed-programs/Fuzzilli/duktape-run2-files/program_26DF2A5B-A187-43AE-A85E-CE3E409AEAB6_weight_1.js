function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.f = 873.7105930385483;
}
const v6 = new F3(2.2250738585072014e-308);
const v7 = new F3(873.7105930385483);
const v8 = new F3(873.7105930385483);
function f12(a13, a14, a15, a16) {
    const o27 = {
        get h() {
            super.b ^= a14;
            const v20 = new Uint16Array(10);
            new Uint32Array(89);
            new BigInt64Array(1024);
            return v20;
        },
    };
    return o27;
}
const v28 = f12(873.7105930385483, 873.7105930385483, 0.7994181659466484, 1024);
const v29 = f12(2.2250738585072014e-308, 0.7994181659466484, 0.7994181659466484, -16089);
f12(2.2250738585072014e-308, 0.7994181659466484, 2.2250738585072014e-308, 1024);
const v31 = v28[v7];
const o32 = {
    "b": -1076498817,
    "g": v31,
    "f": f12,
    ...v29,
    "e": 0.7994181659466484,
};
try { v28.map(v8, v28, v6, o32); } catch (e) {}
Object.defineProperty(v28, "a", { writable: true, enumerable: true, get: f12, set: f12 });
