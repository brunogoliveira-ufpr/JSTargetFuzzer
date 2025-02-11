function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 13;
}
const v3 = new F0();
new F0();
const v5 = new F0();
class C6 extends F0 {
    constructor(a8) {
        super();
        const o9 = {
        };
        new Proxy(v5, o9);
        super.c ||= a8;
    }
    static m(a13) {
        this[a13] = a13;
        return a13;
    }
    static [v5];
    static d;
    d;
}
const v14 = new C6(v3);
const v15 = new C6(v14);
const v16 = new C6(v5);
const v17 = [-3.0,7.939723938370758,-1e-15,-0.0,317054.9080212249,4.0,-1e-15,-2.2250738585072014e-308,-0.0];
const v18 = [5.0,834860.2051522951,1000000000000.0,1000000000000.0,770552.1387186369,5.0,1000.0,5.0];
const v19 = [0.666396492169186,0.0,-1000.0,0.0,-1.3903534586613162,101.77703082499488,1.2615398766797417e+306,3.0,-2.220446049250313e-16];
function f20(a21, a22) {
    const o34 = {
        "f": v17,
        set g(a24) {
            let v23 = this;
            v23 &= a24;
            let v25;
            try { v25 = new a24(a24, v14, F0); } catch (e) {}
            v14 == v25;
        },
        "g": v19,
        "a": v15,
        o(a28, a29, a30) {
            try { a21.sin(v18, v15, a29); } catch (e) {}
            new C6(a21);
            a30 || this;
            return a22;
        },
        "b": a21,
    };
    return o34;
}
f20(v15, v19);
f20(v15, v17);
f20(v16, v17);
let v38 = 0;
while (v38 < 9) {
    const v41 = --F0;
    try { v18.at(v41); } catch (e) {}
    v38++;
}
v15[v15];
