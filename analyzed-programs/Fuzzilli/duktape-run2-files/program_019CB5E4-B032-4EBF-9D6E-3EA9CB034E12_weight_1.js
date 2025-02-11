const v0 = [-23434,-268435456,2147483649,-65537,1073741824,4096];
const v1 = [1578926792,536870887,4294967296,9007199254740990,3];
const v2 = [-54470,442606030,-22377,2147483647,536870912,-1589712554,536870888];
class C3 {
    static get h() {
        let {"b":v5,"f":v6,...v7} = this;
        v6.valueOf = v5;
        return v1;
    }
    static #c = v1;
    [v1];
    5 = v2;
    static d = v0;
    4 = v0;
}
new C3();
const v9 = new C3();
const v10 = new C3();
let v15;
try { v15 = v9["trim"](v0, v10, C3); } catch (e) {}
for (let v16 = 0; v16 < 32; v16++) {
    v2["p" + v16] = v16;
}
try { v0.findIndex(v15); } catch (e) {}
v2[Symbol.species];
