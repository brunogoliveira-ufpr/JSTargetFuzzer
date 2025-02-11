class C6 {
    m(a8, a9) {
        return a8 = this;
    }
    static m(a14, a15) {
        function F16(a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a20;
            this.e = a18;
            this.c = a18;
        }
        new F16(a14, a14, -256);
        new F16(a14, a14, 54972);
        new F16(-256, -256, -256);
        return 2147483647;
    }
}
new C6();
const v25 = new C6();
new C6();
const v28 = new WeakMap();
const v32 = v25[4];
if (v25 != 268435456) {
    v25[delete v25[v25]]?.[261556318];
} else {
    let [v37] = v32;
}
v28[65536] = v25;
