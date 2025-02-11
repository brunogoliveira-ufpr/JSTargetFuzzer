function f1() {
    return undefined;
}
class C2 {
    constructor(a4, a5) {
    }
    #p(a10, a11) {
        f1 = a11;
        f1[223] = this;
        return f1;
    }
    [f1];
    static #d = undefined;
    #f;
}
const v13 = new C2(undefined, undefined);
const v14 = new C2(v13, C2);
new C2(C2, v14);
const v21 = new Int8Array(0);
new BigInt64Array(64);
new Uint32Array(127);
for (let v28 = 0; v28 < 32; v28++) {
    v13["p" + v28] = v28;
}
try {
    const v31 = new Uint32Array(C2, 64);
    try { f1(v31, v31); } catch (e) {}
} catch(e33) {
    v21.length >>= 127;
}
