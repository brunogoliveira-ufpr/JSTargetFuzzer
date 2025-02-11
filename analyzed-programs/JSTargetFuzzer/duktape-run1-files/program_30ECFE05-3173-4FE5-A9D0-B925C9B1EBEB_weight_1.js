function f0() {
    const o7 = {
        __proto__: "function",
        ..."Ttx",
        n(a5) {
            let v4 = this;
            const v6 = "number" >= v4;
            if (v6) {
                const t8 = "function";
                t8.__proto__ = "function";
            } else {
                v4 = "Ttx";
            }
            return v6;
        },
        "a": "number",
        "f": "function",
        "g": "number",
        ..."number",
    };
    return o7;
}
const v8 = f0();
f0();
const v10 = f0();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a14;
}
new F11(v8, v8);
const v16 = new F11(v8, v10);
new F11(v16, v16);
new Map();
function f24() {
    return -65536;
}
class C25 {
    #b = -34569;
    [v10] = null;
    static 5 = v8;
    static 9;
    static 2147483648;
}
new C25();
new C25();
new C25();
