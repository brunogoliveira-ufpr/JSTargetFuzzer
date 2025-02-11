let v3 = 3;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a10;
    this.d = "bigint";
}
new F6(1, -4096, "symbol");
new F6(1, 1, "bigint");
const v13 = new F6(-4096, v3, "bigint");
class C14 {
    #n(a16, a17, a18, a19) {
        let {"f":v20,"g":v21,} = a17;
        const v22 = a19 >>> a17;
        try { v21(-4096, -4096); } catch (e) {}
        return v22;
    }
    static [v13] = 1;
    static [1] = "boolean";
    g;
}
new C14();
new C14();
const v29 = new C14();
const t23 = "bigint";
t23[v29] &= 1;
function f30() {
    return "boolean";
}
v3 &&= -4096;
