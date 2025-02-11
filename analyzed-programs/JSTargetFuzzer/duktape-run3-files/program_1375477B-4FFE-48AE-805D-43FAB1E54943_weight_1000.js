const v1 = new RangeError();
function f2(a3, a4) {
    const o8 = {
        "a": a3,
        __proto__: a3,
        set g(a6) {
            try { a4(a3, a3); } catch (e) {}
        },
        "g": a4,
        "c": a3,
        [a3]: a3,
        [v1]: v1,
        "f": RangeError,
    };
    return o8;
}
f2(RangeError, f2(f2, f2(v1, RangeError)));
new Uint32Array(255);
new Uint16Array(2, 255, RangeError);
new Uint8Array(3548);
const v24 = [0.08950096749583325,-9.362936459327856e+307,-3.0305529326916984e+307];
const v25 = [276267.3265970778,9.903482839878844e+307,1000000000000.0,-6.053433502385323e+307,-0.0,-2.2250738585072014e-308,2.220446049250313e-16];
const v26 = [-2.220446049250313e-16,-730236.6243135012,-2.0,1.0,NaN,0.4918714737014662,0.0796363176606798];
function f27(a28, a29, a30) {
    const o42 = {
        "f": 0.38934684360567084,
        "a": 0.38934684360567084,
        set b(a32) {
            new Int32Array(667);
            new BigUint64Array(3780);
            new Float64Array(3358);
        },
    };
    return o42;
}
const v43 = f27(v24, v26, v25);
const v44 = f27(v26, v24, v26);
f27(v24, v24, v25);
[-128,536870888,3,-43998018,-272941616,536870887];
const v47 = [-1268848804];
[255,-2147483647,3];
v47[1000000000000.0];
const v54 = Symbol.toPrimitive;
v47[v54] = v54;
v44[Symbol.species] = v43;
