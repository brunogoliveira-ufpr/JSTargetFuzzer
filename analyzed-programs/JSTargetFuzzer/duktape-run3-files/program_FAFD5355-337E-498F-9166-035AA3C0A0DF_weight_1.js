const v2 = new Uint8ClampedArray(3);
const v5 = new Int16Array(12);
const v8 = new Float32Array(4096);
class C9 extends Float32Array {
    static #f = Uint8ClampedArray;
    static #p(a11, a12) {
        this[-1] = a12;
        return 12;
    }
    1 = v2;
    constructor(a14, a15, a16) {
        super(a14, a15, a14);
        super.buffer += 3;
    }
}
const v20 = new C9(3, 3, 3);
const v21 = new C9(12, 3, Float32Array);
new C9(3, 3, Int16Array);
v20[2225557849] = v8;
const v24 = v2["forEach"](v20, v8);
const o25 = {
};
const v27 = new Proxy(v5, o25);
let v28;
try { v28 = v24(v20, v2, v27); } catch (e) {}
v8[v28] &&= v28;
v21 in v20;
