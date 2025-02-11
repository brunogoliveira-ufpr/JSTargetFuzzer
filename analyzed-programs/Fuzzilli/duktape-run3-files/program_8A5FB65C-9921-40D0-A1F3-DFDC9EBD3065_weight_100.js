function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1024;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a9;
    this.f = v4;
}
const v11 = new F7(v3, v4);
new F7(v3, F7);
new F7(v3, v11);
function f16() {
    return F0;
}
[-268435456,-865560726,-2066357523,1,255,-2,-47629291,-6,-974685215];
const o21 = {
};
const v23 = !-4400;
-o21 << v23;
