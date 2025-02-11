class C3 {
    static #m(a5) {
        const t2 = "number";
        t2[this] ^= a5;
        this[Symbol.split] = "string";
        return 175242.4657572105;
    }
    #e;
    constructor(a9) {
        function F10(a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = 175242.4657572105;
            this.d = a9;
            this.a = this;
        }
        new F10("number");
        new F10("number");
        new F10("number");
    }
}
const v16 = new C3(C3);
const v17 = new C3(v16);
const v18 = new C3(C3);
new Int16Array(2);
const v24 = new Float64Array(6);
new Int32Array(4);
const v28 = [v18,C3,6];
const v29 = [6,Int16Array,v17,Int32Array];
[v29,Int16Array,v29];
try { v28(v24, Float64Array, v24, Int16Array); } catch (e) {}
const o32 = {
};
const v34 = new Proxy("string", o32);
v34[Symbol.toStringTag];
