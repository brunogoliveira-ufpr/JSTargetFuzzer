let v0 = "number";
class C3 {
    #toString(a5) {
        let v4 = this;
        g = a5;
        v0.__proto__;
        ({"c":v0,"length":v4,...a5} = "m");
        const t7 = "object";
        t7.length |= v0;
        new Set();
        return Set;
    }
    536870889 = "m";
    #a;
    static 4096;
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
const v14 = new WeakMap();
function f15(a16, a17, a18) {
    const o25 = {
        "f": a17,
        [a17]: v14,
        ...a17,
        [v14]: a17,
        [C3](a20, a21) {
            C3 = a17;
            try { a20(v14, a20); } catch (e) {}
            a17[Symbol.toStringTag] = a16;
            this.e = a16;
            return a16;
        },
    };
    return o25;
}
const v26 = f15(v10, v12, "object");
const v28 = f15("m", f15(C3, v0, v11), C3);
const v29 = `
    const v30 = \`241578802${v29}m${v29}36413${"m"}string${v10}J\`;
    const t40 = "object";
    t40.valueOf = v0;
    function F31(a33, a34, a35) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = v0;
        this.f = a35;
    }
    const v36 = new F31(v30, v30, v28);
    const v37 = new F31(v36, "m", v30);
    new F31(v37, v26, f15);
`;
eval(v29);
