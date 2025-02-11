function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1.239187598502878e+308;
    this.c = 385.4156306451314;
    this.h = a5;
}
new F3(NaN);
const v7 = new F3(385.4156306451314);
new F3(-1.239187598502878e+308);
let v15 = 0;
while (v15 < 4) {
    let v18 = 0;
    while (v18 < 7) {
        v7[9] = v18;
        v18++;
    }
    v15++;
}
