function f3(a4, a5) {
    const o11 = {
        "e": a5,
        m(a7) {
            const o8 = {
            };
            const v10 = new Proxy(this, o8);
            return v10;
        },
        "g": a5,
        [a4]: a4,
        __proto__: a5,
        [-1024]: a4,
        "f": 268435441,
    };
    return o11;
}
f3(f3, f3);
const v13 = f3(268435441, -9007199254740990);
const v14 = f3(-9007199254740990, 268435441);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "oW";
}
new F21("4pWS4", 268435456, v14, "4pWS4");
const v28 = new F21("4pWS4", "oW", v13, "oW");
let v29 = new F21("oW", v28, v14, "oW");
v29--;
function f31() {
    return 268435456;
}
