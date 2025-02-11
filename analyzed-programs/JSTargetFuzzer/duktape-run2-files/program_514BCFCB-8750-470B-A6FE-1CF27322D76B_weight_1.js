class C3 {
    static [0.0] = 0.0;
    static {
        let v4 = this;
        let [] = CBOR.encode;
        v4[3] += 0.0;
        v4 ^= v4;
    }
    p(a7) {
        const o8 = {
        };
        const v10 = new Proxy(this, o8);
        const v11 = this << o8;
        try { a7(v11, a7, v10, 1.1693100439642993e+308, v11); } catch (e) {}
        const v13 = 0.0 + a7;
        super.c *= 1.1693100439642993e+308;
        return v13;
    }
}
new C3();
new C3();
new C3();
new Float64Array(3944);
new BigUint64Array(2);
new Int32Array(67);
new Set();
const o36 = {
    "maxByteLength": 2045,
};
const v38 = new ArrayBuffer(2045, o36);
new BigUint64Array(v38);
