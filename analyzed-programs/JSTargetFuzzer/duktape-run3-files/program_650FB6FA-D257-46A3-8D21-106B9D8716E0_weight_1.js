function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -268435456;
    this.f = a9;
}
new F6(1, 1024);
new F6(-268435456, -268435456);
new F6(1, -47115);
class C13 extends F6 {
    #e = F6;
    [-268435456] = F6;
    3 = -24539;
    [-14] = -268435456;
}
new C13();
const v15 = new C13();
const v16 = new C13();
v15 / v16;
