function f0() {
    const o11 = {
        set a(a5) {
            try {
                super.o(this, a5);
            } catch(e7) {
            }
        },
        get c() {
            new SyntaxError();
            return this;
        },
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v14;
    this.b = a18;
}
const v19 = new F15(v14, v14);
new F15(v13, f0);
const v21 = new F15(v12, v19);
const o28 = {
    "g": v21,
};
v13.length = 1;
new BigInt64Array(64);
new Uint16Array(13);
new Uint8ClampedArray(15);
