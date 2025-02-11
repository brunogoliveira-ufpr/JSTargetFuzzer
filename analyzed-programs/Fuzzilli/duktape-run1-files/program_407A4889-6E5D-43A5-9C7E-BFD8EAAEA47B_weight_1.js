const v0 = [2147483647,9,256,15];
const v1 = [-47980,-59178,-4294967296,7,13,31050,2];
const v2 = [4294967297,6,-492262233,268435441];
const v5 = new Uint8ClampedArray(512);
const v8 = new BigUint64Array(127);
const v11 = new Int8Array(1864);
function f12() {
    return 1864;
}
class C13 {
    static a = v8;
    constructor(a15, a16, a17) {
        [a15];
        Object.defineProperty(a15, "d", { writable: true, configurable: true, value: [[BigUint64Array,Int8Array,f12,BigUint64Array],f12,v0,a16,v2] });
    }
    static [v1];
    static #m(a22, a23) {
        Object.defineProperty(v2, 1864, { writable: true, enumerable: true, set: f12 });
        v11 ^ 1864;
        return v11;
    }
    static f = Int8Array;
    static [512] = v8;
}
const v25 = new C13(v1, v0, 512);
const v26 = new C13(v1, v0, v25);
new C13(v26, v0, v0);
let v28;
try { v28 = v25.trimEnd(v5, Int8Array, v25, Int8Array); } catch (e) {}
let {"d":v29,} = v28;
class C30 {
    static f;
    d = v1;
    a = f12;
    #a;
}
new C30();
new C30();
new C30();
