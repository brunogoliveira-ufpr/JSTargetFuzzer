let v4 = new WeakSet();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a7;
    this.e = v4;
    this.f = a7;
}
const v8 = new F5(1440958077);
const v9 = new F5(268435440);
new F5(268435440);
[-282071.13667064835,-3.0,-353.86648258204946,1e-15,2.0,-1000000000000.0];
[-1.7976931348623157e+308,Infinity,-6.192788983857691,3.0,-1000.0,-1.2269984451658455e+308];
const v13 = [-1000.0,2.0,Infinity,NaN,Infinity,-1000.0];
try {
    Object.defineProperty(v9, WeakSet, { writable: true, value: 268435440 });
} catch(e14) {
    v4 = e14;
} finally {
    v13.__proto__ = v13;
    function f15() {
        return v8;
    }
}
