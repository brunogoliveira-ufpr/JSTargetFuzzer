const v2 = new Float64Array(2186);
const v5 = new Int16Array(8);
const v8 = new BigInt64Array(17);
class C9 {
    #o(a11, a12, a13) {
        const v14 = [v8,a12,Float64Array];
        [this,[a12,Int16Array,Float64Array],17,17,a13];
        return v14;
    }
    m(a18, a19, a20) {
        a18 - v8;
        const o22 = {
        };
        new Proxy(v5, o22);
        return Int16Array;
    }
}
const v25 = new C9();
const v26 = new C9();
const v27 = new C9();
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a30;
    this.b = v8;
    this.a = a30;
}
const v33 = new F28(17, v2, v25);
const v34 = new F28(8, 8, v26);
const v35 = new F28(8, v34, v25);
class C36 extends F28 {
    [v25] = 8;
}
new C36();
new C36();
const v39 = new C36();
v39[Symbol.match];
function F43(a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v35;
    this.h = BigInt64Array;
    this.g = a46;
}
new F43(v27, v27);
new F43(v25, v27);
new F43(v33, v34);
