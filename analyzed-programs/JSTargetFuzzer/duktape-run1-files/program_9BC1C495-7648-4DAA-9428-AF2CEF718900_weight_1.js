class C3 {
    static {
        const t2 = 7.643981512444718e+307;
        t2[6] = this;
    }
    static set a(a6) {
        let v7;
        try { v7 = a6(); } catch (e) {}
        v7 >= this;
    }
    #g;
    #h = "h";
    static [7.643981512444718e+307];
}
new C3();
new C3();
const v11 = new C3();
const v14 = new Uint8ClampedArray(184);
const v17 = new Uint16Array(73);
const v20 = new Uint8Array(16);
v20[v17];
const v22 = v17 == Uint16Array;
if (v22) {
    v11.__proto__ = C3;
} else {
    function f23() {
        return v22;
    }
}
v14.a = 184;
