const v2 = new Float64Array(1000);
const v5 = new Uint16Array(865);
const v8 = new Uint32Array(5);
function f9(a10, a11, a12, a13) {
    const o19 = {
        m(a15, a16) {
            this + this;
            let [v18] = a16;
            return v18;
        },
        ...v8,
        ...v8,
        ...v2,
        ...v8,
        __proto__: v5,
    };
    return o19;
}
const v20 = f9(865, Float64Array, 865, 865);
const v21 = f9(5, 865, 5, 5);
const v22 = f9(1000, Uint16Array, 865, 1000);
const v23 = v22[2];
for (let v24 = 0; v24 < 91; v24++) {
    Object.defineProperty(v2, "c", { configurable: true, enumerable: true, get: f9 });
    v2[536870912] = v2;
    new Uint32Array(...v5, f9, v24, f9, ...v5);
}
try { v23(v23, v21, 865, Float64Array, v22); } catch (e) {}
v20[865] = Float64Array;
for (let v27 = 0; v27 < 32; v27++) {
    v21["p" + v27] = v27;
}
