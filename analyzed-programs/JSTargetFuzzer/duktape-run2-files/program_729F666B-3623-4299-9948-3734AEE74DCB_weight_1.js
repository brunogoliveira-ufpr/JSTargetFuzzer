function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9007199254740991;
    this.c = 9007199254740991;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v3;
}
const v10 = new F6(v3, v4);
new F6(v4, v5);
new F6(v3, v5);
function f13() {
    return v10;
}
const v17 = [0.3061296550938776,-5.0,2.194566802012715e+306,-874023.0493816182,1000.0,0.0];
const v18 = [-2.220446049250313e-16,0.704114748202786,-2.2250738585072014e-308,-0.780490972288808,0.0,-1.0,568.2571568161432,2.220446049250313e-16];
const v19 = [-331010.4671821168,8.312334911885898,2.220446049250313e-16,-108.34622373919831,1.7552026897409077e+308];
const v20 = [v18];
const v21 = [v20,v20,v20,v20,v17];
const v22 = [v20,v21,v19,v21,v17];
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = this;
}
const v28 = new F23(F23, v17, v22);
new F23(F23, v18, v19);
const v30 = new F23(v18, v21, v19);
function F34(a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a37;
    this.b = v28;
    this.a = v21;
}
new F34(v28, "toString");
const v39 = new F34(v28, "Pj2i");
new F34(v30, "Pj2i");
v30.length;
v39[268435440] = f13;
