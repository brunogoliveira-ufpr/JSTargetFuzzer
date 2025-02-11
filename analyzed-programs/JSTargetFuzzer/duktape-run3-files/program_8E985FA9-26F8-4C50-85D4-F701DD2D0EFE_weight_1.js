function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9223372036854775807;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
const v7 = [v3];
const v8 = [v5,v7];
[v4,F0,v8];
class C13 extends f6 {
    toString(a15, a16, a17) {
        function F18(a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a20;
            this.e = this;
            this.c = a21;
        }
        const v22 = new F18(v3, -743967940);
        const v23 = new F18(this, v22);
        new F18(v4, v23);
        return v8;
    }
    [F0] = F0;
    static #b = v7;
    [-2] = -743967940;
}
new C13();
new C13();
const v27 = new C13();
v27.__proto__;
const o31 = {
    "maxByteLength": 2278,
};
const v33 = new SharedArrayBuffer(2278, o31);
new Int32Array(v33);
