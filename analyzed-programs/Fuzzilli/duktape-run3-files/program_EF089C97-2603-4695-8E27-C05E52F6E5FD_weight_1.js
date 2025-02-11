function f4() {
    return -9223372036854775807;
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a14;
    this.b = 4294967296n;
}
new F11("flags", 3n);
new F11("lgBV", 3n);
const v17 = new F11("flags", 4294967296n);
v17[127n] &= 65537;
("flags")[3n];
