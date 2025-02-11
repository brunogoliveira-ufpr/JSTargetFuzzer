class C3 {
    get e() {
        let v5;
        try { v5 = this(); } catch (e) {}
        v5 * v5;
        return 0.8868382568013514;
    }
    static {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a15;
            this.f = a16;
            this.c = 8;
        }
        const v17 = new F11("h", this, F11, "isSealed");
        const v18 = new F11("h", 0.8868382568013514, "isSealed", v17);
        new F11(this, "h", 8, v18);
    }
}
const v20 = new C3();
const v21 = new C3();
const v22 = new C3();
class C23 extends C3 {
    static 71 = 0.8868382568013514;
    #toString(a25, a26) {
        const v27 = a25[8];
        for (let v28 = 0; v28 < 70; v28++) {
            super.e;
            [] = v27;
        }
        delete C3?.d;
        return a25;
    }
    static #a = v22;
    [v20] = v21;
}
const v31 = new C23();
new C23();
new C23();
function* f37(a38, a39, a40) {
    C23["h"] = "h";
    const t41 = "h";
    t41[v21] **= -49206;
    return yield a39;
}
f37(v31, f37, v20);
