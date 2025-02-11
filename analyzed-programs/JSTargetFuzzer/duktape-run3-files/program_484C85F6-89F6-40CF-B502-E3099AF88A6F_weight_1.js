function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9007199254740990;
}
new F0();
const v4 = new F0();
const v5 = new F0();
class C9 {
    #valueOf(a11, a12, a13, a14) {
        a11?.[2147483649];
        a13.__proto__;
        return 161829305;
    }
    #h = F0;
    1935;
}
const v20 = new C9();
const v21 = new C9();
new C9();
const v23 = v4[2147483648];
function f24(a25, a26, a27, a28) {
    v5[v21] = delete a26?.h;
    return v23?.e;
}
f24(v23, v20, v23, -3);
v23.length = 2;
