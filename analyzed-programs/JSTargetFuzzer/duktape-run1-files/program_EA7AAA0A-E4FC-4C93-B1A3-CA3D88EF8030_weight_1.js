function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 127;
    this.b = 127;
    this.g = 127;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
class C6 {
    static [v5];
    constructor(a8, a9) {
        v4 = this;
    }
    static #e;
    static 536870889;
}
let v16 = new C6(v5, v5);
const v17 = new C6(v16, v4);
const v18 = new C6(v3, F0);
class C19 {
    static [v16];
    #b;
    get f() {
        v16.c = this;
        return 536870889;
    }
    [C6] = v4;
    #e;
    static #d = v16;
}
const v24 = new C19();
const v25 = new C19();
const v26 = new C19();
const v27 = v5.b;
try {
    v26[6] = v5;
    const v28 = [v17];
    [v28,v28,v27,v28,v25];
    [C19];
} catch(e31) {
    let v32;
    try { v32 = v18.p(C6, v17, e31, e31, C6); } catch (e) {}
    ({"a":v32,"c":v16,} = v32);
} finally {
    v17[v5] = v18;
    try { v26.has(v24, v25, v5); } catch (e) {}
}
