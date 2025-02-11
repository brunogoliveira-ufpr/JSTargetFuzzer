[];
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a10;
    this.e = a10;
    this.h = "-4096";
}
const v12 = new F7("-4096", "p", "-4096");
new F7("-4096", "8", "-4096");
const v14 = new F7(v12, "-4096", "p");
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a18;
    a17.a = a18;
    this.g = "-4096";
}
new F15("-4096", v12);
new F15("8", F7);
new F15("8", v14);
const v24 = [10000,-1024,-11,10000,-1043097953,-231676010,619980035,-65536];
let v25 = 10;
for (; v25--;) {
    v25 & v24;
    v24.__proto__;
    4.0 >= v25;
    const v33 = v24.length;
    try {
    const t0 = -1.4417289740163674e+308;
    t0(v33);
    } catch (e) {}
}
