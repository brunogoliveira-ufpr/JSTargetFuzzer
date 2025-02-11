function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "trimStart";
}
const v6 = new F3("undefined", F3, "undefined", "prototype", "trimStart");
let v7 = new F3("prototype", "undefined", "undefined");
const v8 = new F3("undefined");
function f9(a10, a11, a12, a13) {
    const o18 = {
        "c": v8,
        __proto__: a11,
        "d": a10,
        [v7]: v6,
        3: a13,
        set f(a15) {
            ({"c":a15,"d":v7,} = this);
            const v17 = Int32Array.b;
            a13[v17] = v17;
        },
    };
    return o18;
}
f9(v8, v6, "prototype", v8, v6, F3, v6);
f9(v7, v8, "prototype", f9);
f9(v6, v8, "trimStart", F3);
const v22 = [0.3061296550938776,-5.0,2.194566802012715e+306,-874023.0493816182,1000.0,0.0];
const v23 = [-2.220446049250313e-16,0.704114748202786,-2.2250738585072014e-308,-0.780490972288808,0.0,-1.0,568.2571568161432,2.220446049250313e-16];
const v24 = [-8.584297129784124e+307,-1.7661153090676517e+308,-2.0,2.0,0.0,-794630.4348956768];
const v25 = [v23];
const v26 = [v25,v25,v25,v25,v22];
const v27 = [v25,v26,v24,v22,v22];
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v23;
}
const v33 = new F28(F28, v22, v27);
new F28(F28, v23, v24);
const v35 = new F28(v23, v26, v24);
function F39(a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a42;
    this.b = v33;
    this.match = v26;
}
new F39(v33, "toString");
const v44 = new F39(v33, "Pj2i");
const v45 = new F39(v35, "Pj2i");
v25.f;
v44[268435440] = v45;
