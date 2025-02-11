class C3 {
    set b(a5) {
        Object.defineProperty(a5, this, { enumerable: true, value: 10000 });
        const v6 = a5 + 10000;
        try {
            super.valueOf(-3.9929935569784565, v6, 126.96382679232147, a5);
        } catch(e8) {
        }
        new WeakMap();
    }
    static {
        with (this) {
            try { h.valueOf(this, this); } catch (e) {}
        }
        let v14;
        try {
        const t0 = 126.96382679232147;
        v14 = t0(126.96382679232147, 10000, this);
        } catch (e) {}
        try { v14.transfer(this); } catch (e) {}
    }
}
const v16 = new C3();
new C3();
new C3();
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a24;
    this.a = -3.9929935569784565;
    this.e = a25;
}
new F22("bigint", "e", "e");
new F22("e", "bigint", "e");
new F22("e", "bigint", "e");
class C30 extends F22 {
    static #b;
    toString(a32, a33) {
        try {
            ("bigint").#b;
        } catch(e35) {
        }
        const v36 = -3.9929935569784565 | a32;
        let v39 = 1 << v36;
        -v39;
        const v41 = ++v39;
        const v42 = ~v36;
        Math.hypot(v42);
        const v44 = 1 / v41;
        v41 ^ v42;
        return v44;
    }
}
new C30();
new C30();
new C30();
new F22("e", "e", "bigint");
const o50 = {
    __proto__: v16,
    "a": "bigint",
};
let [,,v51] = "e";
v51[4] = v16;
let v52;
try { v52 = v51(); } catch (e) {}
v52 % v52;
v16.b;
