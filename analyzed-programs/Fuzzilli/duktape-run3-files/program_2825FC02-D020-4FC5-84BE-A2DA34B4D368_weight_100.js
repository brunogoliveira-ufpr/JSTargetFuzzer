new Int16Array(9, 9, 9);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
let v9 = new F5();
const v10 = new F5(9, v9);
const v11 = new F5(v9, v10);
v9 = v11;
let v13;
try { v13 = v10["n"](); } catch (e) {}
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "n";
    this.f = a16;
}
new F14(v11, 9, v13);
[8.27297123285463e+307,Infinity,-3.5560849959380336,2.220446049250313e-16,-1.4357420149592408e+308];
[1.4640541163345832e+307,1000000.0,5.0,-0.0,291.82331635491755,260263.32074563648,0.007569029452455078,0.7304802289625583];
[5.623422314948002,-818893.4509480859];
function f31(a32, a33) {
    const o36 = {
        "e": a33,
        m(a35) {
            return a33;
        },
        [a32]: a32,
    };
    return f31;
}
f31(f31);
f31(-9007199254740990);
function F39(a41, a42, a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
}
let v45 = new F39();
v45--;
