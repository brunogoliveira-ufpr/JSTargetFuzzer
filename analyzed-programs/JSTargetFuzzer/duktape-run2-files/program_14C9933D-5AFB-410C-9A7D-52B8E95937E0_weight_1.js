function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9007199254740992;
    this.b = 9007199254740992;
    this.g = 9007199254740992;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v4;
}
const v9 = new F6(v5, F6);
new F6(v9);
new F6(v5);
new Uint8ClampedArray(1330);
new Float64Array(980);
new Uint8ClampedArray(850);
const v21 = [-409.6596385122307];
const v22 = [2.0,-116.77494940045176];
const v23 = [880570.41456816,3.0,1.6711390122646802e+308,-0.0,-2.220446049250313e-16,2.2250738585072014e-308];
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v22;
}
const v33 = new F27(-1329257878, v22, 48247, v22);
new F27(48247, v23, -1329257878, v23);
new F27(v21, -1329257878, 1024, v22);
function f39() {
    function f41() {
        return arguments;
    }
    return arguments;
}
const v42 = f39(f39, F27, v33, v21, 1024);
function f43() {
    return v42;
}
