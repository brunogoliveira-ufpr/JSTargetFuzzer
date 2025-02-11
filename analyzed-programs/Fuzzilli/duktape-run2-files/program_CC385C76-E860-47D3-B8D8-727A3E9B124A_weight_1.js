class C3 {
    constructor(a5, a6) {
        let v4 = this;
        ({"d":v4,"g":v4,} = v4);
        let v7;
        try { v7 = v4(); } catch (e) {}
        try { new v4(1.0522327348680745e+308); } catch (e) {}
        try { new v4(1.0522327348680745e+308, a6, v7, a6, a6, a6); } catch (e) {}
    }
    [4.989122832896282e+307] = 1.0522327348680745e+308;
    static #c;
    static #e;
    5;
}
const v10 = new C3(-4.567618985086091e+306, -4.567618985086091e+306);
const v11 = new C3(4.989122832896282e+307, 1.0522327348680745e+308);
new C3(1.0522327348680745e+308, -4.567618985086091e+306);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v11;
    this.f = v10;
    this.d = v11;
}
const v18 = new F13(4.989122832896282e+307, 4.989122832896282e+307, -4.567618985086091e+306);
new F13(v18, 1.0522327348680745e+308, 4.989122832896282e+307);
const v20 = new F13(F13, -4.567618985086091e+306, 4.989122832896282e+307);
class C21 extends F13 {
    #h = v18;
    1462;
}
new C21();
const v23 = new C21();
new C21();
delete C21[1073741824];
C21 > -4.567618985086091e+306;
v20[v23];
