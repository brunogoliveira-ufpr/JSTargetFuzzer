function f0() {
}
class C1 {
    [f0] = f0;
    #b = f0;
    a;
    constructor() {
        try {
            this.#b;
        } catch(e4) {
        }
    }
    p() {
        this.__proto__ = this;
        function f6() {
            return this;
        }
        f6();
        this.a;
        return this;
    }
}
const v9 = new C1();
const v10 = new C1();
const v11 = new C1();
class C12 extends f0 {
    constructor(a14, a15) {
        super();
        f0 |= f0;
    }
    static get f() {
        this[f0] >>>= f0;
        const v19 = [v10,[v11,this,v10,this,[C1,v11,v11]],this];
        v10[Symbol.toStringTag] = v19;
        return this;
    }
}
new C12(v10, v10);
const v23 = new C12(v11, v10);
const v24 = new C12(C1, C1);
const v26 = new Map();
const v27 = [v26,v26,C1];
const v28 = [Map,v27,v27,v24];
[v23,v28,v28];
for (const v30 of v27) {
    v24 instanceof C1;
    function F35(a37, a38, a39) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = a37;
        this.d = a39;
    }
    new F35("description", v24, v23);
    new F35("OlRRc", "G2", v28);
    new F35(v9, "description", v30);
}
