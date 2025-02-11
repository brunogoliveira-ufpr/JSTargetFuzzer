function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1073741824n;
}
const v11 = new F6(65536, 256n, 65536);
new F6(-536870912, 1073741824n, 2147483647);
new F6(2147483647, 1073741824n, -536870912);
class C20 {
    static #n(a22, a23, a24, a25) {
        a22[0] = a23;
        return a25;
    }
    static [v11];
}
new C20();
new C20();
new C20();
