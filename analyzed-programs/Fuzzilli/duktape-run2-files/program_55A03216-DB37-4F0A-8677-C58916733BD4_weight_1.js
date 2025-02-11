new WeakSet();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.g = a6;
}
const v7 = new F3(F3, true);
new F3(F3, true);
new F3(v7, F3);
function f13() {
    return 15574;
}
const v17 = v7[6];
if (v17 > F3) {
    const o21 = {
        "maxByteLength": 255,
    };
    const v23 = new SharedArrayBuffer(255, o21);
    new DataView(v23);
} else {
    const v26 = [v17,f13,-955019948,f13];
    [F3,v26];
    [WeakSet,v26,F3,-13n];
}
