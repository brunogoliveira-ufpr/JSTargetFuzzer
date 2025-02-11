function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 26843;
    this.b = 26843;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new Array(10);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v5;
    this.e = a16;
}
const v17 = new F12(v3, 9223372036854775807, v5);
const v18 = new F12(v3, 9223372036854775807, v4);
const v19 = new F12(v3, 10, v5);
v19[F0] = Array;
F0 >>> v5;
function f21(a22, a23, a24, a25) {
    Object.defineProperty(a25, 1923, { get: Array, set: Array });
    try { v5["valueOf"]("valueOf"); } catch (e) {}
    Object.defineProperty(v5, 1024, { enumerable: true, value: a22 });
    return F12;
}
f21(v17, v19, v17, v18);
