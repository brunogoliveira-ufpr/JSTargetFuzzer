function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
v3.c >>= -1586782119;
v3[16] = v5;
function* f12(a13, a14, a15) {
    'use strict';
    const v16 = a13 << a13;
    v5[1000];
    yield v16;
    return a15;
}
f12(v4, -6n, v5);
delete v5[3];
