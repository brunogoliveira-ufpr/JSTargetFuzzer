new WeakMap();
new Uint8Array(64);
new Uint32Array(1024);
const v10 = new Float64Array(3376);
function f11(a12, a13, a14, a15) {
    const o25 = {
        [3376](a17, a18, a19) {
            let v20;
            try { v20 = a17(a17, 1024); } catch (e) {}
            class C21 extends Float64Array {
                [a18];
                #a = WeakMap;
                static [a18] = a14;
                [v20] = a14;
            }
            new C21();
            new C21();
            new C21();
            return a17;
        },
        ...v10,
    };
    return o25;
}
const v26 = f11(WeakMap, 3376, 3376, 3376);
f11(Float64Array, 3376, 3376, 3376);
f11(f11, 1024, 3376, 3376);
Object.defineProperty(v10, 1024, { enumerable: true, get: f11 });
async function f29(a30, a31, a32, a33) {
    class C35 extends v26.constructor {
        d;
    }
    const v36 = new C35();
    await v36;
    return 64;
}
f29(1024, 1024, 3376, v26);
