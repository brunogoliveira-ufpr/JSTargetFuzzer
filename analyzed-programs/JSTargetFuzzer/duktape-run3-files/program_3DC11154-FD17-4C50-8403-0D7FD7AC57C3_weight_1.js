function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = "POSITIVE_INFINITY";
    this.h = a5;
}
new F3("4294967297");
new F3("boolean");
new F3("boolean");
new Date();
class C18 extends Date {
    get h() {
        return 7n;
    }
}
new C18();
new C18();
new C18();
