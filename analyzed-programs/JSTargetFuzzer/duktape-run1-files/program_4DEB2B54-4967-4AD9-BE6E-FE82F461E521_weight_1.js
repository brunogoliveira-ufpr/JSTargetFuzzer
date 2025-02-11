const v0 = [-9007199254740992,41799,-9007199254740991,16,50100,-65535,25461,-9007199254740990,-6,-11];
const v1 = [-1927554678,-536870912,2553,9];
const v2 = [1987574909,127];
function f3() {
    return v1;
}
function f4(a5, a6) {
    const o14 = {
        ...a5,
        n(a8, a9, a10, a11) {
            a11.__proto__ = this;
            delete a9?.length * a11;
            return a10;
        },
        [v1]: a6,
        "b": a6,
        __proto__: v0,
        [a6]: a5,
        ...a5,
    };
    return o14;
}
const v15 = f4(v0, v1);
f4(v2, v0);
f4(v2, v1);
const v20 = new BigInt64Array(10);
const v23 = new BigUint64Array(405);
const v26 = new Float64Array(1000);
const v27 = v23 <= v26;
for (let v29 = 0; v29 < 22; v29++) {
    const v30 = v15.constructor;
    class C31 extends v30 {
        static [v30] = v27;
        [v20] = v30;
    }
    new C31();
}
