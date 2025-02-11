const v1 = new Set();
class C8 extends Set {
    get b() {
        for (let v10 = 0; v10 < 32; v10++) {
            this["p" + v10] = v10;
        }
        return 536870888;
    }
    #e;
    g;
    static [v1] = -128;
    static #c;
    1;
}
const v13 = new C8();
new C8();
const v15 = new C8();
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v15;
}
new F16(v13, 12015);
new F16(-128, 12015);
new F16(v15, -128);
if (536870888 == "buffer") {
    v13[157];
} else {
    const o27 = {
        "maxByteLength": 268435440,
    };
    const v29 = new ArrayBuffer(13, o27);
    new Uint8ClampedArray(v29);
}
