class C3 {
    static m(a5) {
        try {
            super.valueOf(a5, 1000.0);
        } catch(e7) {
        }
        return this;
    }
    [0.9874769013979753] = 1000.0;
    #c;
    [1000.0] = 0.9874769013979753;
}
const v8 = new C3();
const v9 = new C3();
const v10 = new C3();
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = C3;
    this.h = "matchAll";
}
const v16 = new F11(C3, v10, "matchAll");
const v17 = new F11(v8, C3, v16);
const v18 = new F11(C3, v9, 1000.0);
C3[v18] = v16;
v17.toString = v9;
C3 = v16;
new Uint8Array(3925);
new Uint8ClampedArray(1786);
new Int8Array(2884);
