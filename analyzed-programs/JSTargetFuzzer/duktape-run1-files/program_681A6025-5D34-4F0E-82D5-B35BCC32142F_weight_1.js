function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -13;
    this.e = -13;
    this.g = -13;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o16 = {
        [v3]: F0,
        __proto__: v4,
        [a8](a10, a11, a12) {
            const o13 = {
                "e": v5,
                "c": F0,
                "b": a8,
            };
            try {
                super.has(v3);
            } catch(e15) {
            }
            return o13;
        },
        1: v5,
    };
    return o16;
}
f6(v3, v4);
f6(v5, v5);
f6(v3, v3);
const v25 = new Uint8ClampedArray(1);
new Int16Array(64);
new Int8Array(4096);
v25[2];
function f33(a34, a35, a36, a37) {
    a36[v4] = 64;
    return 4096;
}
f33(1, -136230774, v5, -1174918885);
typeof Int16Array === "undefined";
