let v4 = "e";
function f6(a7, a8) {
    const o26 = {
        ...v4,
        get c() {
            let v9 = this;
            ({"f":v9,"length":v4,} = "h");
            const t7 = "boolean";
            t7[v9] = a7;
            return super.b;
        },
        "g": a8,
        [a8](a12, a13, a14) {
            this[6n] = a12;
            let v19 = 2147483649 ^ 2147483649;
            --v19;
            Math.fround(2147483649);
            Math.log2(-4.0);
            Math.acosh(v19);
            Math.round("h");
            Math.round(536870887);
            return a8;
        },
    };
    return o26;
}
const v27 = f6(6n, "boolean");
const v28 = f6(7n, "h");
const v29 = f6(6n, 4294967295n);
class C30 {
    get b() {
        const v32 = v29 in this;
        super.f = f6;
        const v33 = v27[128];
        try { v33(v32, v33, f6, v32, v32); } catch (e) {}
        return f6;
    }
    [v28];
    static 83 = 6n;
    g = "h";
    static #d = 4294967295n;
}
new C30();
new C30();
const v40 = new C30();
delete v40?.b;
function F48(a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a50;
    this.c = a50;
}
const v52 = new F48(6n, v4);
new F48(4294967295n, v52);
new F48(7n, v29);
