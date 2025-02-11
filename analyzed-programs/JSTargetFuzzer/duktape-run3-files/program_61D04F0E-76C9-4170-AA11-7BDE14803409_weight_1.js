class C3 {
    constructor(a5, a6) {
        const v8 = Symbol.iterator;
        a5[v8] = v8;
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = "o";
        }
        new F9(a5, v8);
        const v14 = new F9(v8, a6);
        new F9(v14, 10620);
    }
    #g = 10620;
}
const v16 = new C3(10620, -5.0);
const v17 = new C3(-5.0, 10620);
new C3(v16, v16);
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a21;
    this.b = "o";
}
const v25 = new F19(v16, v17, "o", v16);
const v26 = new F19(v25, v25, v16, "o");
new F19(v26, "o", v26, v26);
const v31 = [-1000000000.0,4.0];
[-1.4083907292040607e+308,1.4150141312915986e+308,3.0];
[2.28460444838249,-4.190547474454529e+307,1.3271709020456563e+308,-1000.0,0.29491051235715926,NaN,-3.0,1000.0,-150104.1873494977];
Object.defineProperty(v16, "f", { writable: true, enumerable: true, value: v31 });
const v34 = v16.constructor;
class C35 extends v34 {
    static #d = v34;
    e = v17;
    536870889 = -5.0;
}
new C35();
