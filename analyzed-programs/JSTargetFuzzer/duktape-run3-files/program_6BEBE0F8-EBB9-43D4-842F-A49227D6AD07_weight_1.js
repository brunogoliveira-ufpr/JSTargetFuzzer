function f0() {
    const o15 = {
        p(a5, a6) {
            function F7(a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a10;
                this.d = 536870887;
            }
            const v12 = new F7(-556306148, "kv", a6);
            const v13 = new F7(this, v12, a6);
            const v14 = new F7(v13, 536870887, -556306148);
            return v14;
        },
        "b": 536870887,
        [-556306148]: "kv",
    };
    return o15;
}
const v16 = f0();
const v17 = f0();
const v18 = f0();
function f19(a20, a21) {
    const o27 = {
        1073741824: a21,
        0: v16,
        get b() {
            try { this.p(a20); } catch (e) {}
            const v24 = delete v17?.b;
            try { a21["fill"](this, a21, a21, "fill"); } catch (e) {}
            return v24;
        },
        [a20]: v16,
        [a21]: v17,
        "b": a21,
    };
    return o27;
}
const v29 = f19(f19(v18, v16), v16);
const v30 = f19(v18, v17);
class C31 extends f0 {
    constructor(a33, a34) {
        super();
        let v36 = -6;
        ~-435250.1292188822;
        Math.trunc(v36);
        ++v36;
    }
    #d = f0;
    static 3861 = f0;
    static a = v30;
}
const v41 = new C31(v17, v30);
const v42 = new C31(v41, v29);
new C31(v29, v18);
const v44 = v42.constructor;
class C45 extends v44 {
    c = v17;
}
let v46 = new C45();
new C45();
--v46 ** v30;
[] = v44;
new f19(v30, v30);
