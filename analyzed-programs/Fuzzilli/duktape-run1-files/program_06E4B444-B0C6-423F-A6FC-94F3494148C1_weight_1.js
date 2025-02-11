function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a9;
}
const v10 = new F6(11, 11);
const v11 = new F6(-3, -3);
const v12 = new F6(-3, 11);
function f13(a14, a15) {
    const o22 = {
        __proto__: v11,
        "g": a15,
        set b(a17) {
            class C18 extends F6 {
                #f;
                d;
            }
            new C18();
            new C18();
            new C18();
        },
        "e": -5.0,
    };
    return o22;
}
f13(-8.310525639774293e+307, -5.0);
const v24 = f13(-5.0, 853197.946970948);
const v25 = f13(-5.0, 853197.946970948);
const v26 = [v25,v12,v10];
const v27 = [536870887,v26,v12,v26,11];
[v27,v25,v11];
v24.g = v12;
[v10];
const v30 = [853197.946970948,v24];
[v10,v27];
v30[Symbol.unscopables];
