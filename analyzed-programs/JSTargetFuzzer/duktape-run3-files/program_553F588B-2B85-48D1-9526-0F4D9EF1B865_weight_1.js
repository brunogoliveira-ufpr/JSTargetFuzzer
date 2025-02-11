const v2 = new Array(64);
const v3 = [v2,64,Array,v2];
const v4 = [Array,Array];
const v5 = [v4,v4,v3,v4,v4];
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 64;
    this.a = a11;
    this.f = Array;
}
const v14 = new F9(3, 3, 64);
const v15 = new F9(64, 9007199254740991, 64);
const v16 = new F9(F9, 3, v15);
try { v5.includes(v16, -9223372036854775808); } catch (e) {}
typeof v3[v5] === "number";
let [...v25] = v4;
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a29;
    this.b = v25;
    this.a = v25;
}
new F26(v2, v14);
new F26(v5, v15);
new F26(v5, v14);
