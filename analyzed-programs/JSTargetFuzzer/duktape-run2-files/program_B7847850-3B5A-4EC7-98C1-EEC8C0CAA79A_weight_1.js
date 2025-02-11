new Uint8Array(670);
const v5 = new Uint8Array(236);
new Int32Array(6);
new Int32Array(255);
new Uint16Array(512);
const v17 = new BigInt64Array(2);
let v18;
try { v18 = BigInt64Array(v17, 670, 512); } catch (e) {}
const o19 = {
};
new Proxy(v5, o19);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a25;
}
new F22(670, 6);
new F22(2, 6);
new F22(6, v18);
