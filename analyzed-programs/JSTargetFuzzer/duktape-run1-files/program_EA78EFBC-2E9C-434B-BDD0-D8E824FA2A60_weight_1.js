const v0 = [];
new Int8Array(v0, v0, v0);
new Uint8ClampedArray(1);
const v9 = new Uint32Array(4096);
[v9,Uint8ClampedArray,Uint32Array,v9];
const v11 = [4096,Uint32Array,1,1];
[v11,v9,v11,4096];
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 0;
    function f20(a21, a22, a23) {
        const o28 = {
            p(a25, a26) {
                let v27 = a21 ** a25;
                [a22,v27,a22] = a25;
                return f20;
            },
        };
        return o28;
    }
}
const v29 = new F16(0, 15);
const v30 = new F16(-1368938825, 15);
new F16(0, -1368938825);
536870888 < F16;
if (F16) {
    v30.__proto__ = v29;
    try {
    const t0 = 0;
    t0();
    } catch (e) {}
    for (let v37 = 0; v37 < 32; v37++) {
        v29["p" + v37] = v37;
    }
} else {
    v29[170836399] = 536870888;
    v30[2133] >>= 170836399;
}
