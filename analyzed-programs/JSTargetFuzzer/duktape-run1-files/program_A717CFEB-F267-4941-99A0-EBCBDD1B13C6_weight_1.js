const v2 = new Int32Array(10);
const v5 = new BigInt64Array(1);
const v8 = new BigInt64Array(628);
function f9(a10, a11, a12) {
    const o27 = {
        "h": 628,
        get c() {
            v8.d = a12;
            try { v2.every(a10); } catch (e) {}
            let [v16] = v5;
            return a11;
        },
        p(a18, a19) {
            const o22 = {
                "maxByteLength": 1073741824,
            };
            const v24 = new ArrayBuffer(14, o22);
            const v26 = new Int32Array(v24);
            return v26;
        },
    };
    return o27;
}
f9(1, 10, 10);
f9(10, 628, 628);
f9(628, 10, 628);
let v31 = 10;
for (; v31--;) {
    const v34 = [];
    Reflect.apply(v8.reverse, v8, v34);
}
