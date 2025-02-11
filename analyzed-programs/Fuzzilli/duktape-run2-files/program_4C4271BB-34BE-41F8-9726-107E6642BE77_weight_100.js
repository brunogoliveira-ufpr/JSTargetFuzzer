function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 2147483649;
    this.h = 2147483649;
}
new F0();
new F0();
const v5 = new F0();
[-268435456,1083258751,-11,4294967296];
const v10 = [-16,-2,18977,-39017,4096,13,-6673,-2961,-65535,-2147483647];
const v11 = [-1539037972,-65537,-57769,129,50674,10,-1,-29099,268435439,-312644223];
function f12() {
    return v5;
}
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a15;
    this.g = v10;
}
new F13(v10, 4.741657934872361);
new F13(v10, -4.2212490019826365);
new F13(v11, -1000000.0);
function f22(a23, a24) {
    const v25 = new Date(a23);
    v25["toUTCString"]();
    return v25;
}
f22(-67931.39465507062);
