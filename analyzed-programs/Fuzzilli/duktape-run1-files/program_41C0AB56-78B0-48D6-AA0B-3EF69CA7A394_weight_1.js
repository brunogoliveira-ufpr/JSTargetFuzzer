function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9007199254740992;
    this.h = 257;
}
const v6 = new F3(257);
const v7 = new F3(9007199254740992);
const v8 = new F3(257);
function f9(a10, a11, a12, a13) {
    const o24 = {
        "b": a10,
        "d": v7,
        [a12](a15, a16, a17, a18) {
            for (const v19 in a15) {
                Object.defineProperty(a12, v19, { writable: true, value: v19 });
                v8 - a17;
            }
            [v6,[[a13,a15,a16,a15,F3],a16,this,this],v7];
            return a15;
        },
        "e": a13,
        __proto__: v8,
        [v8]: a11,
    };
    return o24;
}
let v25 = f9(v8, v8, F3, v7);
f9(65537, v8, v8, v8);
const v27 = f9(v25, v7, v7, v7);
const v33 = new BigUint64Array(127);
const v36 = new BigUint64Array(0);
const v39 = new BigUint64Array(257);
v36[v33.length] = v39;
v25 <<= v27;
BigUint64Array === v36;
typeof 10n === "bigint";
