function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 7;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static [v3] = v3;
    set e(a8) {
        new F0();
        this / F0;
        delete v3[v5];
    }
    m(a13, a14) {
        for (let v15 = 0; v15 < 32; v15++) {
            v3["p" + v15] = v15;
        }
        const o18 = {
        };
        const v20 = new Proxy(this, o18);
        return v20;
    }
}
new C6();
const v22 = new C6();
const v23 = new C6();
const v27 = [10000,v5];
const v28 = [v4];
[v27,v28,v22];
v27[3370] = v3;
let v30;
try { v30 = v22(v28, v5, C6, v5); } catch (e) {}
const v31 = `
    const v33 = 10000 <= F0 ? 10000 : F0;
    try { new v30(-17407, v33, v33, v23); } catch (e) {}
    new Set();
`;
eval(v31);
