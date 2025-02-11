function f0() {
}
class C1 extends f0 {
    #valueOf() {
        f0[9] = this;
        try { ("replace").trimStart(); } catch (e) {}
        return "replace";
    }
    static 6 = f0;
    static [f0];
    static 9;
}
const v7 = new C1();
const v8 = new C1();
const v9 = new C1();
class C10 extends f0 {
    set f(a12) {
        let {"a":v13,"g":v14,...v15} = a12;
        v15.__proto__;
    }
    4294967296 = v9;
    set b(a18) {
        var c = v8;
        let {"a":v19,"d":v20,} = v7;
        let v21 = delete v8[9];
        v21 |= a18;
        v19 = C1;
        let v24 = 64;
        const v26 = v24--;
        Math.asinh(v24);
        C1 | C1;
        !v26;
    }
}
const v30 = new C10();
new C10();
const v32 = new C10();
function f33(a34, a35, a36) {
    const o37 = {
        ...a34,
        "g": a35,
        __proto__: v7,
        "a": v30,
        "b": v9,
        ...v9,
        "d": C1,
        [v8]: C10,
        3232: v8,
        [f0]: C1,
        "e": C1,
    };
    return o37;
}
const v38 = f33(C1, C10, v32);
const v40 = f33(C10, v32, f33(v38, v8, v30));
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a44;
    this.a = v30;
}
const v45 = new F41(v38, v30);
const v46 = new F41(C1, v7);
new F41(v40, v32);
v40.b |= v45 << v46;
