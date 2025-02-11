new Int32Array(10);
const v5 = new Float64Array(1855);
const v8 = new Uint8Array(64);
function f12() {
    return "bigint";
}
const t6 = "bigint";
t6.toString = f12;
("bigint").__proto__;
for (const v17 of v5) {
    const v18 = new Int32Array("13i", v17);
    v18.buffer ^= v17;
}
v8 && 64;
