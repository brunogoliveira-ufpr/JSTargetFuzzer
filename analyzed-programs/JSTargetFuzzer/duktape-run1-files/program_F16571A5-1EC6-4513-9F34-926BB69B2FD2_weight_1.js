function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 257;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o17 = {
        p(a10, a11, a12) {
            try { new F0(a8, v4, ...a12, 9007199254740990, a12, 9007199254740990); } catch (e) {}
            return a7;
        },
        ...a8,
        __proto__: a8,
        ...a7,
    };
    return o17;
}
const v18 = f6(v3, v5);
const v19 = f6(v5, v5);
f6(v18, v5);
v19[Symbol.unscopables];
new Float32Array(129);
new Uint32Array(4);
new Int8Array(218);
