const v1 = new Set();
function f2() {
    return Set;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
    this.a = v1;
    this.e = a5;
}
const v7 = new F3(F3, F3);
const v8 = new F3(Set, v7);
new F3(v1, f2);
const v10 = [0.6252503808688701,1000.0,3.343748730197852,4.0];
const v11 = [-2.220446049250313e-16,-78.42602977572335];
const v12 = [0.0,299.3884187084359,965744.940633348,-211533.17723218584,161.6702510763473,0.13598414214379517,960313.149743015,3.0,1.0];
function f16(a17, a18) {
    const o25 = {
        "e": f2,
        "f": f2,
        "c": a17,
        m(a20, a21, a22, a23) {
            a18.length;
            Object.defineProperty(v12, "g", { writable: true, value: a22 });
            return a22;
        },
        ...a18,
        "h": v11,
        "a": a18,
        ...v8,
        [a18]: v11,
        1024840759: f2,
        "d": -2147483649n,
    };
    return o25;
}
f16(-2n, v10);
f16(v11, v12);
f16(Set, v11);
for (let v29 = 0; v29 < 23; v29++) {
    new BigUint64Array(1);
    new BigUint64Array(4);
    new Uint16Array(4096);
}
