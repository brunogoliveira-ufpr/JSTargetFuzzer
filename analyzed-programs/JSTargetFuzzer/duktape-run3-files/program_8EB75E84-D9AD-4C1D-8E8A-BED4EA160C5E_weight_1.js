const v0 = [];
function f1() {
    return v0;
}
class C2 extends f1 {
    valueOf(a4) {
        return 10000n;
    }
    6;
    static d = v0;
    #g = f1;
    static #b;
}
const v8 = new C2();
const v9 = new C2();
new C2();
class C11 extends f1 {
    set f(a13) {
        super.b = "2147483647" >>> this;
    }
    #g = v0;
    static [v9];
    static #b = v8;
}
new C11();
const v19 = new C11();
new C11();
delete C11?.f;
class C25 {
    [v19] = C11;
    #g = 1;
    e;
    h;
}
new C25();
new C25();
new C25();
