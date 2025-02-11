new Int8Array([]);
new Uint32Array(1);
const v9 = new Uint32Array(59);
[v9,Uint32Array];
const v11 = [59,Uint32Array,1,1];
[v11,v9,v11];
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 0;
}
const v20 = new F16(0, 15);
const v21 = new F16(-1368938825, 15);
new F16(0, -1368938825);
536870888 >= F16;
if (F16) {
    v21.__proto__ = v20;
    try {
    const t0 = 0;
    t0();
    } catch (e) {}
    for (let v28 = 0; v28 < 32; v28++) {
        v20["p" + v28] = v28;
    }
} else {
    v20[170836399] = 536870888;
    v21[2133] >>= 170836399;
}
