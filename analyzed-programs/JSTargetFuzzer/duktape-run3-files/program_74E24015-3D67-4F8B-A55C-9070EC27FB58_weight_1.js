new Int8Array(512);
new Uint16Array(127);
new BigInt64Array(1191);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a12;
    this.d = a13;
}
const v15 = new F9(512, 512, 512, 512);
new F9(v15, 127, 127, 127);
new F9(v15, 512, 1191, 1191);
let v24 = -1000000000.0;
-1024 & F9;
let v26 = v24++;
--v26;
const o30 = {
    "maxByteLength": 15,
};
const v32 = new SharedArrayBuffer(15, o30);
new Float64Array(v32);
