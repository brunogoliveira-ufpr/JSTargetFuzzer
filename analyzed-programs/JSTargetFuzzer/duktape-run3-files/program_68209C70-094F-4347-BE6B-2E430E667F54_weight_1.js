function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.b = 64;
}
const v6 = new F3(-256);
const v7 = new F3(64);
const v8 = new F3(129);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a14;
    this.f = a16;
}
const v18 = new F12(-1.7976931348623157e+308, v7, v7, 689.883169174567);
const v19 = new F12(-1.7976931348623157e+308, v8, v7, -1.7976931348623157e+308);
new F12(-1.7976931348623157e+308, v6, v6, 689.883169174567);
const v21 = -1.7976931348623157e+308 == -1.7976931348623157e+308;
v21 ? -1.7976931348623157e+308 : -1.7976931348623157e+308;
let v26 = v21 - 4;
const v27 = !4;
v26 || v19;
v26++;
v18[v27] = -392267.747459059;
