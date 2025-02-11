function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 9007199254740992;
}
new F0();
new F0();
new F0();
let v15 = -9.475434529335894e+307;
1382501384 > v15;
const v19 = [16];
const v20 = [536870889,7,-1,10341,9007199254740991];
v15 = -1e-15;
v20["pop"]();
const v24 = 1 || 1;
v19 / (v19 | (1 >>> v24));
v24 || v24;
