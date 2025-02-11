function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.c = a9;
    this.a = a9;
}
const v10 = new F6(v4, v4);
const v11 = new F6(v5, v3);
const v12 = new F6(v11, v11);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v12;
    this.d = v12;
    this.a = a19;
}
const v20 = new F16("byteOffset", v10);
new F16("p", v5);
new F16("9007199254740990", v10);
v20 | v4;
for (let v24 = 0; v24 < 32; v24++) {
    v3["p" + v24] = v24;
}
