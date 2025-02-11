function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -2147483648;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
    this.a = a9;
    this.h = a9;
}
new F6(v4, v5);
const v11 = new F6(v4, v4);
const v12 = new F6(v3, v5);
let v16 = v12.__proto__;
v16 = F0;
new v16();
new Date();
v3 | v11;
Date(1073741823);
