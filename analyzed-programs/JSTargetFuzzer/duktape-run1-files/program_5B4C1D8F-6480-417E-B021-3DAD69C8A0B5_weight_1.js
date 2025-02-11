function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -35889;
    this.c = -35889;
    this.e = -35889;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,F0,v3,v3];
const v7 = [v3,v6,v3,v4,v5];
const v8 = [v5,F0];
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
    this.f = v8;
}
new F9(F0, v8);
let v14 = new F9(F0, v6);
new F9(v14, v7);
const v18 = new Int16Array(1228);
const v21 = new Uint8Array(363);
const v24 = new Uint8Array(5);
let v28;
try { v28 = v18.find(v18); } catch (e) {}
try {
    v18.__proto__ = v18;
} catch(e30) {
    v24[e30] = e30;
} finally {
    v14 <<= v28;
    v21[256] |= 363;
}
