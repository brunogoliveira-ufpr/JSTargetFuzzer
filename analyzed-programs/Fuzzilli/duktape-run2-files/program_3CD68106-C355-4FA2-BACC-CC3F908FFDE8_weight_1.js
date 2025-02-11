class C3 {
    get d() {
        this[127] = 127;
        this.h;
        return typeof "number" === "string";
    }
    static #d = 127;
    c = 127;
    static 5 = "number";
    static ["number"];
}
const v9 = new C3();
const v10 = new C3();
new C3();
function f12() {
    return C3;
}
function* f19(a20, a21) {
    function f22() {
        return 13;
    }
    yield 13;
    return f12;
}
f19(127, v10);
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a28;
}
new F25(-15656, v10, C3);
new F25(13, -5, v9);
new F25(-1024, 9, v9);
