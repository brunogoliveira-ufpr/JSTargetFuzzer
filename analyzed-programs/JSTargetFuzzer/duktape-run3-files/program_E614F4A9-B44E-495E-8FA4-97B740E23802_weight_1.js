function f9() {
    return 3.380209403513799;
}
class C10 extends f9 {
    static valueOf(a12, a13, a14, a15) {
        const v20 = Symbol.iterator;
        const o29 = {
            [v20]() {
                let v22 = 10;
                const o28 = {
                    next() {
                        v22--;
                        const v26 = v22 == 0;
                        const o27 = {
                            "done": v26,
                            "value": v22,
                        };
                        return o27;
                    },
                };
                return o28;
            },
        };
        return "object";
    }
}
new C10();
const v31 = new C10();
const v32 = new C10();
let v36 = 0;
while (v36 < 9) {
    const v39 = -4294967295 - v31;
    const v40 = v39 > -169000.4913899284;
    function F41(a43, a44, a45, a46) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a45;
        this.d = v40;
        this.b = a43;
    }
    const v47 = new F41("e", v39, "e", v32);
    const v48 = new F41(v32, v39, C10, v47);
    new F41("e", 3.380209403513799, v48, v48);
    v36++;
}
