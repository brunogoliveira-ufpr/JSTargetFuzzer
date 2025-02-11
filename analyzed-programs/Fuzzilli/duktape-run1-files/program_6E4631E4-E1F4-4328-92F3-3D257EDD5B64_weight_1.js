const v2 = new BigInt64Array(129);
const v5 = new Int8Array(10);
let v8 = new Uint32Array(6);
function f9(a10, a11, a12) {
    const o23 = {
        "f": v8,
        toString(a14, a15) {
            const v17 = Symbol.toPrimitive;
            const o22 = {
                [v17]() {
                    let v18 = this;
                    [v8,v18] = v2;
                    return a14;
                },
            };
            return a12;
        },
    };
    return o23;
}
const v24 = f9(BigInt64Array, v8, 6);
const v25 = f9(f9, v24, 129);
const v26 = f9(10, v8, 10);
let v27 = 0;
while (v27 < 9) {
    v24[v5] = v25;
    v26.f <<= 10;
    v27++;
}
