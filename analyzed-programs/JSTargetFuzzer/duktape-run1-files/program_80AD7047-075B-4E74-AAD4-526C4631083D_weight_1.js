function f0() {
}
class C1 {
    p() {
        return f0;
    }
    n() {
        let v6 = this;
        v6 &&= v6;
        let v7;
        try { v7 = v6.p(v6, v6, f0, v6); } catch (e) {}
        v7[f0] = v6;
        super.d &= v7;
        return v7;
    }
}
const v8 = new C1();
const v9 = new C1();
const v10 = new C1();
function f11() {
    return f0;
}
let v18;
try { v18 = v9.p(v10, v9); } catch (e) {}
try { v8.p(10); } catch (e) {}
try { v8.n(); } catch (e) {}
[f11];
[v10,[10n,C1,f11,10],10,10,v10];
v18 % v10;
