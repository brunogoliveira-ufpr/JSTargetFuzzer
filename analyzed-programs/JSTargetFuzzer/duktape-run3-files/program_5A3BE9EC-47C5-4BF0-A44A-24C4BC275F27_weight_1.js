function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 16;
    this.a = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v4,v5,v3];
const v7 = [v6,v4];
let v8 = [v5,v6,v3];
class C12 extends F0 {
    static f;
    static g = v7;
    p(a14, a15, a16, a17) {
        v8 >>= v7;
        a17[6];
        const v19 = new F0();
        const v20 = delete a15[v19];
        try { v4.o(v19, F0, -1712179498n, v20, v20); } catch (e) {}
        return v3;
    }
    static 268435439;
}
new C12();
const v23 = new C12();
const v24 = new C12();
let v26 = 60367;
v26 = -65536;
const o28 = {
};
const v30 = new Proxy(v24, o28);
v23 != v30 ? v23 : v30;
