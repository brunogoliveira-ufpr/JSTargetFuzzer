function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -3;
    this.a = -3;
    this.b = -3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    #n(a8) {
        Math.tanh(6);
        let v12 = ~a8;
        Math.pow(a8, 6);
        const v14 = a8 ** v12;
        Math.imul(v14, 6);
        --v12;
        return v14;
    }
    [F0] = v5;
}
const v17 = new C6();
const v18 = new C6();
const v19 = new C6();
class C20 extends C6 {
    [v5] = v18;
    b;
    static o(a22, a23, a24, a25) {
        ++a24;
        v17[0];
        new C6();
        return v18;
    }
    e;
    512 = C6;
    static a;
    #b = F0;
}
new C20();
new C20();
const v31 = new C20();
const o32 = {
    __proto__: v3,
    16: v31,
    10: C6,
    15: v4,
};
const v33 = [C6,v3,o32];
v4.a += v33;
v33[C6] = v19;
v31[o32] = F0;
