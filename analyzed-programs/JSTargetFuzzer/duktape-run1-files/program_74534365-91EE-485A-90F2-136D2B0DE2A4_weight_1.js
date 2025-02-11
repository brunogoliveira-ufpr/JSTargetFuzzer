const v0 = [];
function f1() {
    return v0;
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a4;
    this.b = f1;
}
const v5 = new F2(f1);
const v6 = new F2(v5);
const v7 = new F2(v6);
v7.__proto__;
let v15 = 0;
do {
    break;
    v15++;
} while (v15 < 6)
v5[7.072861760078645] = F2;
