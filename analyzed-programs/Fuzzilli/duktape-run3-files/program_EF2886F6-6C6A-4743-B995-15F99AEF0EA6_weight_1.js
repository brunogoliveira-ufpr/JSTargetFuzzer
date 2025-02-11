new Set();
const v4 = new Uint8Array(16);
new Float64Array(1);
const v10 = new Float32Array(4096);
function f11(a12, a13, a14) {
    const o23 = {
        set d(a16) {
            a14 | this;
            [1000000000.0,0.005469359411818808,-2.220446049250313e-16,1.7543616187647597,1e-15,9.374983610609519e+306];
            [358024.3915533321,-Infinity];
            [9.175706160537537,-1000.0,3.0,-2.220446049250313e-16];
            try { new a16(16); } catch (e) {}
            a16 ^= v10;
            delete this?.e;
        },
        "a": a12,
        2501: 4096,
        "d": v4,
        __proto__: v4,
    };
    return o23;
}
f11(1, 1, 4096);
const v25 = f11(16, 16, 16);
const v26 = f11(16, 4096, 16);
Object.defineProperty(v26, Uint8Array, { writable: true, get: f11, set: f11 });
v25.length = 2188554496;
for (let i30 = 0, i31 = 10; i30 < i31; i30++, i31--) {
    const v39 = v4.byteOffset;
    try { v26.toString(i30, v39, i30, i30); } catch (e) {}
}
