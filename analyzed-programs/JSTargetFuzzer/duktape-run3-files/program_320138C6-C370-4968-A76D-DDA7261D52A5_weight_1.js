function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.a = f0;
}
const v3 = new F1();
Object.defineProperty(v3, 2, { set: f0 });
const t9 = "e";
t9.toString = f0;
new F1();
new F1();
[8,-13,-1281573204,-1024];
[0,-89935932,61389,16,-536870912,4];
[2147483647,3,-51033,-1629,2147483647,-2,9223372036854775807,2087624004,1073741823];
[];
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    const t19 = "-944085173";
    t19.g = a25;
    this.a = -37030;
    this.e = a26;
}
new F22("G5", v3, "-944085173", F22);
new F22("-63745", "G5", "-944085173", F1);
new F22("-944085173", "-944085173", "G5", F22);
const o35 = {
    valueOf() {
        return 39405;
    },
};
