const v0 = [];
class C1 {
    constructor() {
        new Uint8Array(168);
        new Uint8ClampedArray(5);
        new BigUint64Array(1837);
    }
    #g = v0;
    static [v0] = v0;
    h;
}
const v12 = new C1();
const v13 = new C1();
const v14 = new C1();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
    this.a = v0;
    this.b = a17;
}
new F15(v13, v12);
const v20 = new F15(v12, C1);
const v21 = new F15(v14, v12);
let {"b":v28,} = v20;
const o29 = {
};
const v31 = new Proxy(C1, o29);
const o32 = {
    __proto__: v31,
    "f": -9,
    "h": 4,
    4294967296: v21,
};
