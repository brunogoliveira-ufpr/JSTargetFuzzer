let v0 = [];
class C1 {
    o() {
        v0 &= this;
        const v3 = this.__proto__;
        const t5 = v3.__proto__;
        t5[232] ||= v3;
        return this;
    }
    constructor() {
        delete v0[this << v0];
    }
}
const v11 = new C1();
const v12 = new C1();
const v13 = new C1();
delete C1?.a;
let o24 = {
    "d": v13,
    "h": v11,
    1024: v13,
    __proto__: v0,
};
o24 = v12;
new Float64Array(1024);
new BigInt64Array(128);
new BigUint64Array(127);
