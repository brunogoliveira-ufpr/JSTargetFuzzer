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
const v18 = new F12(v5, v4, v4, -536870912);
new F12(v5, v3, v3, v4);
new F12(v5, v4, v5, v4);
[];
v18[Symbol.species];
new Uint32Array(3901);
new Float32Array(4096);
new Uint8ClampedArray(255);
function F40(a42, a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a43;
    this.a = a42;
    this.e = a44;
}
new F40("-944085173", "G5", "-944085173", F40);
new F40("-63745", "G5", "-944085173", 1489094520);
new F40("-944085173", "-944085173", "G5", F40);
const o53 = {
    valueOf() {
        return -1240098343;
    },
};
