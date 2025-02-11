const v2 = new Int32Array(6);
new Float64Array(131);
const v8 = new Uint32Array(2656);
function f9(a10, a11, a12, a13) {
    const o17 = {
        "h": Uint32Array,
        __proto__: v2,
        "d": a12,
        4: a11,
        [2656](a15, a16) {
            v8.byteOffset = a16;
            v2.buffer >>>= a16;
            return this;
        },
        "c": a12,
        [131]: a13,
        "e": a13,
        [-2]: 131,
        "g": a13,
    };
    return o17;
}
const v18 = f9(6, 6, v2, 131);
const v19 = f9(131, 2656, Float64Array, 2656);
f9(6, 6, v18, 131);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v18;
}
new F21(6, 2656, 6, v8);
new F21(6, 6, 2656, v8);
new F21(131, 2656, 131, v18);
function F33(a35, a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a37;
}
const v39 = new F33(Infinity, v19, 131, 6);
new F33(-1000000.0, v39, 6, 6);
new F33(Infinity, v18, 131, 131);
F33 ||= F33;
