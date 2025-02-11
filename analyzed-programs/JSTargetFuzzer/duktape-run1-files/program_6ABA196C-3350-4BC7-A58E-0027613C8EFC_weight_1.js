const v10 = new WeakSet();
new Int8Array(1024);
new Float64Array(512);
new Uint32Array(8);
class C20 {
    [2.220446049250313e-16] = Int8Array;
    5 = v10;
    8 = 8;
}
new C20();
new C20();
const v23 = new C20();
var h = Uint32Array;
for (let v24 = 0; v24 < 32; v24++) {
    v23["p" + v24] = v24;
}
