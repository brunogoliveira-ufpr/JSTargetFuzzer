function f1() {
    const o9 = {
        get e() {
            const v3 = this < undefined;
            try { this["n"]("n", undefined); } catch (e) {}
            const v6 = [this,"n",v3,this,this];
            [,v6,"n",[v3,v6,v6,v6]];
            return v6;
        },
        [undefined]: undefined,
        __proto__: undefined,
        517: undefined,
    };
    return o9;
}
const v10 = f1();
const v11 = f1();
const v12 = f1();
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a22;
}
const v24 = new F19(v11, -5.0, "127");
new F19(v12, -1e-15, "127");
const v26 = new F19(v10, v11, "unicode");
v26[v24];
class C28 {
    [v26];
    #d;
    d = v26;
}
new C28();
new C28();
new C28();
