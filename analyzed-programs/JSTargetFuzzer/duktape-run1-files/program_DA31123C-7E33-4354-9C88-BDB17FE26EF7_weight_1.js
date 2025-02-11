function f0() {
}
new Int16Array(12);
new TypeError(127);
new Uint8Array(365);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 12;
}
const v20 = new F16(0, 15);
const v21 = new F16(12, 15);
new F16(0, 536870888);
if (!(536870888 >= v21)) {
    v21.__proto__ = v20;
    try { TypeError(); } catch (e) {}
    for (let v28 = 0; v28 < 32; v28++) {
        v20["p" + v28] = v28;
    }
} else {
    v20[536870888] = 536870888;
    v21[4] *= 0;
}
