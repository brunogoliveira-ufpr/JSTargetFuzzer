const v0 = [257,-52587,1,1073741823,127];
const v1 = [1000,4,-14,1,51507,12];
const v2 = [-2,27591,-36136,63249,1073741824,-9007199254740991,512];
function f3(a4, a5) {
    const o15 = {
        "h": v0,
        __proto__: a5,
        "f": a5,
        set c(a7) {
            a4[137] = a5;
            super.b = a7;
            a4[v1] = v1;
            a5[a4] = v0;
            const v8 = a7.__proto__;
            Math.asin(-22681);
            Math.asin(31014);
            -v8;
        },
    };
    return o15;
}
f3(v2, v0);
f3(v0, v0);
const v18 = f3(v2, v1);
let v22 = 10;
let v24 = new Int8Array(v22);
const v27 = new Int16Array(2213);
new Uint32Array(257);
const v31 = (a32, a33, a34) => {
    a34 /= v27;
    return v24.buffer;
};
Object.defineProperty(v0, 5, { get: v31, set: f3 });
let v36;
try { v36 = v24.set(v18, 257); } catch (e) {}
({"buffer":v36,"byteLength":v22,...v24} = v24);
