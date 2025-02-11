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
let v16 = undefined;
v16 %= v16;
new Float64Array(980);
new Uint8ClampedArray(850);
const v22 = [-409.6596385122307];
const v23 = [2.0,-116.77494940045176];
const v24 = [880570.41456816,3.0,1.6711390122646802e+308,-0.0,-2.220446049250313e-16,2.2250738585072014e-308];
let v25 = -1329257878;
let v27 = 0;
do {
    v25 = 1330;
    try { F0(); } catch (e) {}
    v27++;
} while (v27 < 3)
function F33(a35, a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v23;
}
const v39 = new F33(v25, v23, 48247, v23);
new F33(48247, v24, v25, v24);
new F33(v22, v25, 1024, v23);
function f45() {
    function f47() {
        return arguments;
    }
    return arguments;
}
const v48 = f45(f45, F33, v39, v22, 1024);
function f49() {
    return v48;
}
