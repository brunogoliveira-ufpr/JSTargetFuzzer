function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483647;
    this.h = 2147483647;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,F0];
const v8 = [[v5,v5,F0],v4];
let v13 = 536870887n;
v6[-1453800291] %= 61373;
v13 >>>= -11n;
-15 ^ v8;
45749 >>> (536870889 ** -9007199254740991);
~45749;
