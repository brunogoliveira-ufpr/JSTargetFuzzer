new Uint16Array(2254);
new BigUint64Array(8);
const v8 = new BigUint64Array(5);
new BigUint64Array(512);
const v14 = new Uint16Array(1000);
new Int8Array(4);
v8 === v14;
v8.__proto__ = v14;
async function f19(a20, a21, a22) {
    const o25 = {
        "maxByteLength": 126,
    };
    const v27 = new SharedArrayBuffer(126, o25);
    new Uint32Array(v27);
    await v14;
    return a20;
}
f19(4, BigUint64Array, f19);
