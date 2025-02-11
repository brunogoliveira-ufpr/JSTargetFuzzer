function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.c = 2147483649n;
}
new F6(-14n, -2157n, -9n);
const v12 = new F6(2147483649n, -14n, -9n);
new F6(1024n, v12, 1501083032n);
