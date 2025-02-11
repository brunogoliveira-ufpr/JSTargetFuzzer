class C6 {
    m(a8, a9, a10) {
        function f11(a12, a13) {
            const o14 = {
                84: a12,
            };
            return o14;
        }
        f11(a9, "bigint");
        const v16 = f11(a9, "bigint");
        f11(a8, v16);
        return v16;
    }
}
const v18 = new C6();
const v19 = new C6();
const v20 = new C6();
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a26;
    this.g = a25;
}
let v27 = new F21("8", C6, "d", v20);
const v28 = new F21("bigint", v19, "8", v18);
const v29 = new F21("8", v19, "bigint", v28);
v29.h = 9n;
({"f":v27,...C6} = v19);
("d")[Symbol.replace];
new Array(2);
v20[9n];
