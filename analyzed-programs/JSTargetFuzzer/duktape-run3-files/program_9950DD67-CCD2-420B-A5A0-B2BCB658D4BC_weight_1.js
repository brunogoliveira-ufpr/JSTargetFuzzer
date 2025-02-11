class C3 {
    static {
    }
    m(a9) {
        [10000,9223372036854775807,-65536,447991786];
        [-9007199254740991];
        const v12 = [-23333,-268435456,536870889,-44893,257];
        const o13 = {
        };
        new Proxy(this, o13);
        return v12;
    }
}
new C3();
const v17 = new C3();
const v18 = new C3();
const o25 = {
};
new Proxy(v17, o25);
let v28;
try { v28 = v18.m(4.0); } catch (e) {}
v18["m"]();
v18.__proto__ = C3;
C3 / v28;
