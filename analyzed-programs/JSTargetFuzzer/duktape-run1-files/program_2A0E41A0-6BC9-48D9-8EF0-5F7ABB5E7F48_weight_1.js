new WeakSet();
function f12(a13, a14, a15) {
    const o32 = {
        "h": 257,
        __proto__: "valueOf",
        [a13](a17, a18, a19, a20) {
            function f21(a22, a23, a24, a25) {
                return a18;
            }
            f21(4294967296, a15, a18, a17);
            delete a13?.[this];
            return false;
        },
        "b": a13,
    };
    return o32;
}
let v33 = f12("number", "valueOf", "getTimezoneOffset");
const v34 = f12(257, "getTimezoneOffset", "number");
const v35 = f12("number", "getTimezoneOffset", "valueOf");
v35[v34] = 7 in v35;
v33 &= v35;
v35.h;
function F38(a40, a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 255;
    this.c = -9007199254740990;
    this.b = -9007199254740990;
}
new F38(v33, v33, "getTimezoneOffset", 257);
new F38(9, v33, 4294967296, v33);
new F38(9, 7, 257, 255);
