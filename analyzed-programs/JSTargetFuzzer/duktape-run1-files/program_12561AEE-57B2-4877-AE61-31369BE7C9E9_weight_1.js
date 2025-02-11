function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9007199254740990;
    this.c = 9007199254740990;
}
new F0();
let v4 = new F0();
const v5 = new F0();
new Array(194);
function f12() {
    return 194;
}
const v18 = new Int16Array(1228);
new Uint8Array(363);
const v24 = new Uint8Array(5);
let v28;
try { v28 = v18.find(v18); } catch (e) {}
try {
    v18.__proto__ = v18;
} catch(e30) {
    v24[e30] = v5;
} finally {
    v4 <<= v28;
    v24[256] |= 363;
}
