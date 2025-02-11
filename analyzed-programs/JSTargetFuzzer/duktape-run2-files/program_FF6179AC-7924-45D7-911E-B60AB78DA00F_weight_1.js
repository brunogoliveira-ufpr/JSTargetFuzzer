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
[0.8317712383793179,0.0,-1.7012569754514774e+308,-2.2698545198809006,-1000.0,-Infinity];
const v17 = [-409.6596385122307];
const v18 = [2.0,-116.77494940045176];
const v19 = [880570.41456816,3.0,1.6711390122646802e+308,-0.0,-2.220446049250313e-16,2.2250738585072014e-308];
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v18;
}
const v29 = new F23(-1329257878, v18, 48247, v18);
new F23(48247, v19, -1329257878, v19);
new F23(v17, -1329257878, v14, v18);
function f35() {
    function f37() {
        return arguments;
    }
    return arguments;
}
const v38 = f35(f35, F23, v29, v17, 1024);
function f39() {
    return v38;
}
