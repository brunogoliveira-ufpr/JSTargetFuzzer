function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a10;
    this.a = a8;
}
new F6(20087, 9223372036854775807, F6);
const v12 = new F6(-11281, 20087, F6);
const v13 = new F6(20087, 20087, v12);
v13.h >>= -2;
let v14 = 0;
while (v14 < 2) {
    v14++;
}
