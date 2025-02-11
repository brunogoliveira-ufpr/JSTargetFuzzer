function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 536870889;
    this.d = 536870889;
    this.h = 536870889;
}
new F0();
new F0();
new F0();
new Uint16Array(0);
new Float64Array(315);
new Uint16Array(10);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 0;
}
const v22 = new F18(0, 0);
const v23 = new F18(-1368938825, 15);
new F18(0, -1368938825);
536870888 >= F18;
if (v23) {
    v23.__proto__ = v22;
    try {
    const t0 = 0;
    t0();
    } catch (e) {}
    for (let v30 = 0; v30 < 32; v30++) {
        v22["p" + v30] = v30;
    }
} else {
    v22[-1368938825] = 536870888;
    v23[2133] >>= 170836399;
}
