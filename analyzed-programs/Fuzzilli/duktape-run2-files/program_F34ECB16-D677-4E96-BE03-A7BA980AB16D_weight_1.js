const v2 = new Float64Array(256);
const v5 = new Uint16Array(1000);
const v8 = new Float32Array(528);
function f9(a10, a11) {
    const o16 = {
        "a": a11,
        get c() {
            v5["values"](this, 1000, a11, 528, Float64Array);
            return this.__proto__;
        },
        "c": a11,
        "b": a11,
        "d": a11,
    };
    return o16;
}
const v17 = f9(528, 528);
f9(1000, 528);
const v19 = f9(528, 256);
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1000;
    this.f = a22;
}
const v26 = new F20(528, Float64Array, 528, v2);
new F20(528, F20, v26, v17);
new F20(256, v19, v8, v19);
const o32 = {
    "maxByteLength": 2114531912,
};
const v34 = new ArrayBuffer(16, o32);
new Float32Array(v34);
