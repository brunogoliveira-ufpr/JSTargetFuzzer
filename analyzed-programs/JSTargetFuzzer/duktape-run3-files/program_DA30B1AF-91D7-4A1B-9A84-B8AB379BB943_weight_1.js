function f0() {
}
const v5 = new WeakMap();
function f6(a7, a8, a9, a10) {
    const o22 = {
        ...v5,
        [11]: 3318,
        [a9](a12, a13, a14) {
            const o17 = {
                "maxByteLength": 3316229492,
            };
            const v19 = new SharedArrayBuffer(1807, o17);
            new BigUint64Array(v19);
            return a8;
        },
    };
    return o22;
}
f6(3318, 11, v5, 9007199254740990);
const v24 = f6(11, 3318, v5, 9007199254740990);
const v25 = f6(9007199254740990, 9007199254740990, 3318, 11);
const t20 = "string";
t20[v24] = "string";
v24.toString = f6;
class C29 extends f6 {
    95 = 9007199254740990;
}
new C29();
new C29();
new C29();
try { C29["indexOf"](v25); } catch (e) {}
