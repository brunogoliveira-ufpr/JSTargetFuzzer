function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 11;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    n(a8) {
        function f9(a10, a11) {
            v5[3560900038] = a11;
            return a11;
        }
        f9(a8, a8);
        v4[2];
        new WeakMap();
        return f9;
    }
    static b = v3;
    static #f;
    static #b = F0;
}
new C6();
const v17 = new C6();
new C6();
function f19() {
    return v17;
}
new Int16Array(10);
new Uint32Array(3415);
new Float64Array(512);
for (let v29 = 0; v29 < 32; v29++) {
    v5["p" + v29] = v29;
}
v3[v5];
const o34 = {
    "defineProperty": f19,
    "deleteProperty": f19,
    "has": String,
    "isExtensible": String,
    "ownKeys": f19,
    "setPrototypeOf": String,
};
new Proxy(C6, o34);
