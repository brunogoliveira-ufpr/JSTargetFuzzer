const v1 = new Map();
class C2 {
    static #o(a4) {
        try { a4["getFloat32"](v1, v1, "getFloat32", this, v1); } catch (e) {}
        return "getFloat32";
    }
    constructor(a8) {
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = this;
        }
        const v13 = new F9(a8, a8);
        const v14 = new F9(this, v13);
        new F9(v14, v1);
    }
}
new C2(Map);
const v17 = new C2(C2);
new C2(v17);
-Infinity;
/[^(?:a?)?]/dsmyv;
/(?:ab)/dsu;
/aG.8Pv/dmyv;
const v29 = Symbol.iterator;
const o38 = {
    [v29]() {
        let v31 = 10;
        const o37 = {
            next() {
                v31--;
                const v35 = v31 == 0;
                const o36 = {
                    "done": v35,
                    "value": v31,
                };
                return o36;
            },
        };
        return o37;
    },
};
