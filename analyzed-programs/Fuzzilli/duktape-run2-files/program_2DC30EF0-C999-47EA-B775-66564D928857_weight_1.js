new Int8Array(369);
const v5 = new Int16Array(256);
new Int32Array(30);
const v11 = new BigInt64Array(5);
const v14 = new Int16Array(8);
const v17 = new BigInt64Array(256);
const v18 = v11[369];
const v19 = v14[2];
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 8;
    this.h = a23;
}
const v26 = new F20(256, v14, 30, 369);
new F20(5, v26, v18, 8);
new F20(5, v11, 5, 369);
try { v19(...v5, ...v17, v19, 256); } catch (e) {}
