class C3 {
    static #f = 257n;
    [257n];
    static {
        const v6 = this[f];
        this != v6 ? this : v6;
    }
    static set g(a10) {
        ~this;
        let v13;
        try { v13 = a10["n"](); } catch (e) {}
        try {
            v13.#f;
        } catch(e15) {
        }
    }
}
const v16 = new C3();
new C3();
const v18 = new C3();
const v19 = [-23493,56823,10000];
const v20 = [4,-91861139,-1,157376123,501922525,536870912];
[-3,3];
class C22 extends C3 {
    constructor(a24, a25) {
        super();
        v19[v20] = a24;
    }
    static p(a27, a28, a29) {
        const v30 = v19.__proto__;
        a28 = a29;
        v30[Symbol.iterator] = v19;
        return a29;
    }
    static #c = v18;
}
new C22(v19, 257n);
new C22(v20, 257n);
const v35 = new C22(-18892530n, 257n);
const v36 = v35[876];
const v38 = new Date();
try { v36(v16, v38, C22); } catch (e) {}
function f40(a41) {
    return a41;
}
class C42 extends f40 {
    static #d;
}
