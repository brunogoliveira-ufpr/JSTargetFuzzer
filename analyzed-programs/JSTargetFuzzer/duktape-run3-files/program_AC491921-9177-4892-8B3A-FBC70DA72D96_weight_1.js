function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -4;
    this.f = -4;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a17;
    this.d = 257;
}
new F12(v5, v4, v4, -536870912);
new F12(v5, v3, v3, v4);
new F12(v5, v4, v5, v4);
[];
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a31;
    this.a = a30;
    this.e = a32;
}
new F28("-944085173", "G5", "-944085173", F28);
new F28("-63745", "G5", "-944085173", 1489094520);
new F28("-944085173", "-944085173", "G5", F28);
const o41 = {
    valueOf() {
        return -1240098343;
    },
};
