class C3 {
    #valueOf(a5) {
        this[a5] = this;
        ("valueOf").length;
        return a5;
    }
    constructor(a11, a12) {
        const o17 = {
            valueOf() {
                return "tlI";
            },
        };
    }
}
const v18 = new C3("tlI", C3);
const v19 = new C3(C3, -4.0);
new C3("tlI", "valueOf");
new Int8Array(6);
const v26 = new Uint8Array(74);
new BigUint64Array(2);
v26.__proto__;
v19.a;
const o32 = {
    "f": 74,
    "a": v18,
    __proto__: v19,
    [v18]: Uint8Array,
};
for (let v33 = 0; v33 < 32; v33++) {
    v18["p" + v33] = v33;
}
