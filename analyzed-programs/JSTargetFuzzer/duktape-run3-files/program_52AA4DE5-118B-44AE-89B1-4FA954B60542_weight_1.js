const v0 = [1.0252412043193736e+308,-1000000.0,-1e-15,-3.0,8.239003167345505,-5.90025657994744,1000000000000.0];
const v1 = [2.9339263559116446,-6.484545033437399];
const v2 = [-1000.0];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
}
const v6 = new F3(v1);
const v7 = new F3(v0);
const v8 = new F3(v0);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v6;
    this.f = v2;
    this.c = a12;
}
const v14 = new F9(v8, v7, v2);
const v15 = new F9(v7, v7, v0);
const v16 = new F9(v7, v7, v0);
class C17 {
    constructor(a19, a20, a21, a22) {
        Object.defineProperty(v16, 174, { writable: true, configurable: true, enumerable: true, value: v0 });
        new Int16Array(113);
        new Int16Array(14);
        new Uint8ClampedArray(257);
    }
    #h;
}
const v32 = new C17(v14, v7, v15, v7);
const v33 = new C17(v15, F9, v32, v7);
const v34 = new C17(v32, v7, v14, v33);
let v35 = 10;
for (; v35--;) {
    v8[268435441] = v34;
    const v37 = delete v34[268435439];
    try { C17.toString(v37, v37, v6, v37); } catch (e) {}
}
