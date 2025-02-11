const v0 = [4.18088777824768];
const v1 = [-1000000000.0,-2.220446049250313e-16,0.0,3.0,0.30038806767932447,-3.8760218682069887,251329.50924913073];
const v2 = [1.2576926548151748e+308,-Infinity,-3.0,1.5296182094238096e+308];
class C3 {
    static [v0];
    static #valueOf(a5) {
        function f6(a7) {
            return a7;
        }
        class C8 extends f6 {
            static 2 = a5;
            16;
        }
        return v1;
    }
}
const v9 = new C3();
new C3();
const v11 = new C3();
class C12 {
    static f;
    get f() {
        super.a = C3;
        let v14;
        try { v14 = this(); } catch (e) {}
        v11[v14] = this;
        return this;
    }
    d;
    static d;
    [v9];
    h;
}
new C12();
const v16 = new C12();
new C12();
function f18(a19, a20, a21) {
    const o22 = {
        __proto__: v16,
        [v0]: a19,
    };
    return o22;
}
const v23 = f18(v0, v1, v1);
f18(f18, v2, v1);
f18(f18, v23, f18);
