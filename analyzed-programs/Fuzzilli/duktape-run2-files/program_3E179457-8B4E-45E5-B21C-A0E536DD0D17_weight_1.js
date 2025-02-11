function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 6;
    this.d = 6;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o8 = {
        "d": a7,
        "f": v3,
        "b": F0,
        ...a7,
        1024: v5,
        __proto__: v5,
        60: a7,
        "e": a7,
        "g": a7,
        9: v3,
        "a": F0,
        "c": a7,
        "h": v4,
    };
    return o8;
}
const v9 = f6(v5);
f6(v5);
const v11 = f6(v9);
const v18 = v4.d;
v4[536870887] = F0;
const v19 = [129,129,129,v18,v3];
[1348789799,v19,v19];
[2147483649,v19];
class C23 extends v11.constructor {
    e = 1348789799;
    static #a;
    static #f;
}
new C23();
