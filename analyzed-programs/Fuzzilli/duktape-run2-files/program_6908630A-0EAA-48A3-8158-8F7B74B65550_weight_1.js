const v0 = /Va??/mdiyv;
const v1 = /Za/sdiy;
const v2 = /u\u{12345}\u{23456}(?:ab|cde)/gsdi;
const v3 = [v2,v0];
const v5 = [v3,v3,[v2,v1,v2],v1];
function f6() {
    return v0;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.d = v3;
    this.g = v0;
}
const v11 = new F7(v1, v0);
new F7(F7, v0);
new F7(v2, v2);
v0.test(-1073741824n, -12n, ...v5, f6);
if (v2 == v5) {
    v11.f = v2;
} else {
    delete v3[v1];
}
