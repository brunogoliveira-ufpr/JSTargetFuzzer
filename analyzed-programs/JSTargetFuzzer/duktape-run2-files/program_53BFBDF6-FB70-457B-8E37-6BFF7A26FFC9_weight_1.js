function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 127;
    this.g = 127;
    this.f = 127;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v5;
    this.e = v4;
}
new F7(v4, v5);
const v12 = new F7(v3, F7);
new F7(v12, v5);
const v14 = [-4.193918908312242e+307,-7.186705349121669,-9.60417259303156,5.101147346288645,-0.0,-393658.0092246671,1.363108989126589e+308,-1000000.0,1.3344016850162384e+308,-6.031480899038375];
[-7.085478837850257,5.0,-1000.0,5.0,-1000000.0,1000000000000.0,-2.2250738585072014e-308,1000000000000.0,-73200.97296927613];
[-473.62408674188214,Infinity,5.0] >> 536870912;
Uint32Array * v12;
[0.8317712383793179,0.0,-1.7012569754514774e+308,-2.2698545198809006,-1000.0,-Infinity];
const v22 = [-409.6596385122307];
const v23 = [2.0,-116.77494940045176];
const v24 = [880570.41456816,3.0,1.6711390122646802e+308,-0.0,-2.220446049250313e-16,2.2250738585072014e-308];
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v23;
}
const v34 = new F28(-1329257878, v23, 48247, v23);
new F28(48247, v24, -1329257878, v24);
new F28(v22, -1329257878, v14, v23);
function f40() {
    function f42() {
        return arguments;
    }
    return arguments;
}
const v43 = f40(f40, F28, v34, v22, 1024);
function f44() {
    return v43;
}
