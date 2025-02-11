const v0 = [];
class C1 {
    static 256;
    constructor() {
        super.g = this;
        function* f3(a4) {
            yield v0[1024];
            return v0;
        }
        f3(this);
    }
    [v0];
    #e;
}
new C1();
const v9 = new C1();
const v10 = new C1();
class C11 extends C1 {
    static #p(a13, a14) {
        this[Symbol.species];
        super.b = a13;
        return a14;
    }
    constructor(a19) {
        super();
        return a19;
        const v20 = C1[this];
        v20[v9] &&= v20;
    }
}
new C11(v9);
new C11(v0);
const v23 = new C11(C1);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a27;
}
new F24(v10, v9);
const v29 = new F24(v23, v10);
new F24(F24, v29);
new Int16Array(1321);
new Uint8ClampedArray(10);
new Int8Array(121);
v29 instanceof Uint8ClampedArray;
