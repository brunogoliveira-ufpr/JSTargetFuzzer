let v0 = 1273139224;
class C3 {
    constructor(a5, a6) {
        super.e;
    }
    static h = 5;
    #d = v0;
    8;
    static [v0];
    static f = 5;
    static [5];
    #c = 1;
}
new C3(v0, 1);
new C3(5, 5);
const v13 = new C3(5, 5);
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a16;
}
const v18 = new F14(5, 1);
new F14(5, 5);
new F14(v0, v0);
class C21 extends F14 {
    static get d() {
        let v22 = this;
        v0 = 5;
        let v24 = 0;
        ++v22;
        +(--v24);
        Math.clz32(-44918);
        return v13;
    }
    [v0];
    f;
}
new C21();
new C21();
const v32 = new C21();
const v33 = 1 << v32;
if (1) {
    let v35;
    try { v35 = v18["forEach"](v33, F14); } catch (e) {}
    v32.g /= v35;
} else {
    C3.length = 0;
    0 || 0;
}
