function f0() {
    const o15 = {
        "a": "match",
        get d() {
            let v10 = -235936.00146611093;
            -v10;
            -v10;
            -v10;
            v10--;
            return this;
        },
    };
    return o15;
}
const v16 = f0();
f0();
f0();
function f20() {
    return true;
}
new Float32Array(8);
const v29 = new Int16Array(1000);
const v32 = new Uint16Array(1000);
Object.defineProperty(v32, v16, { writable: true, enumerable: true, get: f20 });
for (const v33 in v32) {
    try { v29.some(f0); } catch (e) {}
}
1000 << Float32Array;
