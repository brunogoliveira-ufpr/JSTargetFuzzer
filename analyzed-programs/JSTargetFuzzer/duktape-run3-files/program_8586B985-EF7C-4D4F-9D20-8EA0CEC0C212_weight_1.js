function f0() {
}
new Date();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "stringify";
    this.f = a8;
}
new F6("stringify", "unicode", "unicode");
const v12 = new F6("unicode", "JLjx", "stringify");
new F6("JLjx", "stringify", "unicode");
f0();
let v19 = v12 == Date();
v19++;
function f21(a22, a23) {
    v12.length = 4;
}
new Promise(f21);
