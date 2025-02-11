class C3 {
    get d() {
        super.e = 726368.4483598869;
        this[-9.436224571723986e+307];
        const v7 = new WeakMap();
        return v7;
    }
    #g = 726368.4483598869;
    static c = -9.436224571723986e+307;
    static #b;
    e = -3.0;
    4;
}
const v11 = new C3();
const v12 = new C3();
const v13 = new C3();
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a16;
    this.d = C3;
    this.f = a16;
}
const v18 = new F14(v13, v12);
const v19 = new F14(v12, v12);
const v20 = new F14(v11, v13);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = C3;
    this.f = v19;
}
const v25 = new F21(v20, -3.0);
new F21(v20, -3.0);
new F21(v20, 726368.4483598869);
F21 ||= F21;
const o28 = {
    "f": C3,
    __proto__: v20,
    "c": v25,
    "b": v18,
    [F14]: C3,
};
for (let v29 = 0; v29 < 32; v29++) {
    o28["p" + v29] = v29;
}
