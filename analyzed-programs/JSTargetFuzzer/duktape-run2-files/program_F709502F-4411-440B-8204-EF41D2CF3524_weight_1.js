function f0() {
}
const v1 = [5,1,-5,-65537,58796,-9007199254740990,9007199254740990,7];
const v2 = [268435456,-13,536870889,10147,-1151176414,6,24369888,-33006,16505];
const v3 = [9007199254740990];
function f4(a5) {
    const o12 = {
        set d(a7) {
            try { v1.find(a7, this); } catch (e) {}
            v3 | a7;
            delete a5[a5];
            v3 && a5;
        },
        "f": a5,
        "e": v3,
        "d": f0,
        "b": v2,
    };
    return o12;
}
const v13 = f4(v2);
const v14 = f4(v3);
f4(v3);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a19;
}
const v20 = new F16(v2, v14);
new F16(v3, v14);
const v22 = new F16(v2, v13);
delete v14[v2];
v22.__proto__ = v14;
let v24 = 0;
while (v24 < 6) {
    v3 / v3[10];
    f4 + v20;
    v24++;
}
