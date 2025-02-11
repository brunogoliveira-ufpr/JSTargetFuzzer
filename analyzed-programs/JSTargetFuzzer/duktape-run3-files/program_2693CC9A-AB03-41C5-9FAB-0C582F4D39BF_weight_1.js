function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -4096;
    this.a = -4096;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a8.e = F0;
    this.d = a8;
}
const v10 = new F6(v3, v4);
new F6(v3, F0);
new F6(v4, v5);
function f14() {
    return undefined;
}
new Int32Array(1390);
new Uint8ClampedArray(1460);
new Uint16Array(5);
const v27 = [0.08950096749583325,-9.362936459327856e+307,-3.0305529326916984e+307];
const v28 = [276267.3265970778,9.903482839878844e+307,1000000000000.0,-6.053433502385323e+307,-0.0,-2.2250738585072014e-308,2.220446049250313e-16];
const v29 = [-2.220446049250313e-16,-730236.6243135012,-2.0,1.0,NaN,0.4918714737014662,0.0796363176606798];
function f30(a31, a32, a33) {
    const o45 = {
        "f": f14,
        "a": a33,
        set b(a35) {
            new Int32Array(667);
            new BigUint64Array(v27);
            new Float64Array(3358);
        },
    };
    return o45;
}
const v46 = f30(v27, v10, v28);
const v47 = f30(v29, v27, v29);
f30(v27, v27, v28);
[-128,536870888,3,-43998018,-272941616,536870887];
const v50 = [1073741824,0,-860608911,3,39987,10,4,-2];
[255,-2147483647,3];
v50[1000000000000.0];
const v57 = Symbol.toPrimitive;
v50[v57] = v57;
v47[Symbol.species] = v46;
