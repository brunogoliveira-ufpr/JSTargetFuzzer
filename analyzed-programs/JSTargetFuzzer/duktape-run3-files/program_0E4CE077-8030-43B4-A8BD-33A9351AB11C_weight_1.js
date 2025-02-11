function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    static #g = v5;
    constructor(a8) {
        const v11 = new Array(255);
        try { v11.forEach(Array, v11); } catch (e) {}
        this[4];
        v5[2];
    }
    #valueOf(a16) {
        a16 >>>= v5;
        const v17 = new F0();
        try {
            v17.#valueOf(v4, v3, this, a16, v4);
        } catch(e19) {
        }
        return v3;
    }
}
const v20 = new C6(v4);
const v21 = new C6(v4);
const v22 = new C6(v3);
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a30;
    this.d = a28;
}
new F26(-3.4439570707502964, v22, v21, -3.4439570707502964);
const v33 = new F26(v3, v21, -4.0, 4.0);
const v34 = new F26(v33, C6, v3, 4.0);
function f35(a36, a37, a38, a39) {
    v34 == v20;
    v5.b = a39;
    return v33;
}
f35(v33, v3, v3, -3.4439570707502964) / F0;
