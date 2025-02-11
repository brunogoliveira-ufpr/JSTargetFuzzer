function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 16;
    this.b = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,F0,v4,v5];
const v7 = [F0,F0];
const v8 = [v3,v6,v5];
class C9 {
    h = v5;
    static c;
    static set g(a11) {
        this[127] >>>= a11;
    }
    get g() {
        function f13() {
            return v5;
        }
        [3.0,-237.125602988026];
        [-1000000000.0];
        [561192.6023299615,-2.220446049250313e-16,0.3360390202332022,0.5444433250434585,-2.0];
        try { v8.entries(); } catch (e) {}
        return v7;
    }
}
const v18 = new C9();
new C9();
new C9();
v3[Symbol.toPrimitive] = v4;
[v18,v4,...v7,-1.0];
let v27 = 0;
do {
    let v29;
    try { v29 = v3["n"](-599752.4497206868, v5); } catch (e) {}
    v7.length = v29;
    v27++;
} while (v27 < 4)
