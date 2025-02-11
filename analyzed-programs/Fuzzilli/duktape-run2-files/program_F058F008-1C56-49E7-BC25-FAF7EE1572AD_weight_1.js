function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 255;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    #m(a8) {
        let v9;
        try { v9 = v5.o(this, v4, v5, this); } catch (e) {}
        v9 <<= a8;
        return 2.0;
    }
    constructor(a14, a15) {
        super.d = v5;
        v3[v3] = v4;
        try {
            super.o(a14, v3, v5, a15, v5);
        } catch(e17) {
        }
    }
}
const v18 = new C6(v5, v5);
const v19 = new C6(v3, v4);
new C6(v19, v5);
const v21 = [-130862.72136121837,-1000000000.0];
const v22 = [0.6954674732190563,3.0,0.8913695896223117,3.0,1.0090644949947713e+308,-311752.9877888496];
[-2.0654280475494406,2.220446049250313e-16,-2.0,-1000000.0,1000000.0,-1000000000.0,1.0145026939836749e+308];
class C24 {
    16 = v21;
    1;
    2147483647 = v19;
    #c = v5;
    #n(a26, a27, a28, a29) {
        this.__proto__ = v22;
        try {
            super.n(v3, v5);
        } catch(e31) {
        }
        return this;
    }
    [v4];
    #b;
}
const v32 = new C24();
new C24();
new C24();
let v36;
try { v36 = v32["o"](C24, v32, v4); } catch (e) {}
const v37 = v36;
if (v37) {
    let {"length":v39,...v40} = [...v22,v3,C6];
    try { v36(); } catch (e) {}
} else {
    v32[14] = v22;
    try { v36(v18, F0, C6); } catch (e) {}
}
