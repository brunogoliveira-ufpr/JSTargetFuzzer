let v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v0;
    this.g = v0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
class C12 extends F1 {
    constructor(a14, a15, a16) {
        super();
        this[a15] = a14;
        function f17() {
            return "Y";
        }
    }
    o(a19, a20, a21, a22) {
        v0 /= v0;
        const v24 = v3 >>> a20;
        const t19 = "Y";
        v4[delete t19?.length ** a22] &&= v24;
        const t22 = "object";
        delete t22[2043529829];
        return F1;
    }
}
new C12("Y", -536870912, v0);
const v29 = new C12(-536870912, -9223372036854775808, "toString");
new C12(v29, -9223372036854775808, v0);
for (let i32 = 0; i32 < 5; i32++) {
    v4.__proto__;
}
