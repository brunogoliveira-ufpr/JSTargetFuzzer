function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
    this.b = -13308n;
    this.d = a11;
}
const v13 = new F9(1024, -1610n);
new F9(1024, 65535n);
const v15 = new F9(-1073741824, -9007199254740992n);
class C16 {
    [v15];
    #a = -1073741824;
    [-2] = 65535n;
}
new C16();
new C16();
new C16();
C16.valueOf = 1024;
delete v13[0];
