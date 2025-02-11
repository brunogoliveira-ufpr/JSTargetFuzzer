function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 33034;
    this.g = 33034;
    this.a = 33034;
}
const v3 = new F0();
let v4 = new F0();
new F0();
class C6 extends F0 {
    static a;
    static get h() {
        /^w(?:a+)?/viyg;
        /(x)(x)(x)\1*/udiyg;
        const v10 = /foo(?<!bar)baz/mvis;
        v4 /= v3;
        return v10;
    }
    #valueOf(a12, a13) {
        super.a;
        let v16 = 5;
        const v18 = ++v16;
        Math.cos(v4);
        Math.log1p(v18);
        const v21 = !v18;
        Math.log1p(v16);
        return v21 - v18;
    }
}
const v24 = new C6();
const v25 = new C6();
const v26 = new C6();
function f27(a28, a29) {
    const o39 = {
        valueOf(a31, a32, a33, a34) {
            try { a31(a33, a28); } catch (e) {}
            a28[10] = this;
            v24[v3] = v26;
            return v3;
        },
        4: a29,
        2: v4,
        ...v3,
        "g": a29,
    };
    return o39;
}
f27(v3, f27(v26, v25));
f27(v26, v4);
const o46 = {
};
new Proxy(f27, o46);
const o51 = {
    "maxByteLength": 2147483649,
};
const v53 = new SharedArrayBuffer(171, o51);
new Uint8ClampedArray(v53);
