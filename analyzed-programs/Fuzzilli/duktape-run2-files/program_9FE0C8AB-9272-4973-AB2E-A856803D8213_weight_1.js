function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 6;
    this.e = 6;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
class C7 {
    constructor(a9, a10) {
        [[this],F0,a10,f6];
        [a10,a10];
    }
    set b(a15) {
        v4[Symbol.species] = a15;
    }
    static [v5] = v5;
    #c = f6;
}
const v18 = new C7(v3, v3);
new C7(v4, v4);
const v20 = new C7(C7, v5);
const v21 = [v20];
const v22 = [v21,v3];
[v18,v20,v4,v5];
v21[127] = v22;
let v24 = 0;
while (v24 < 6) {
    v22[v4] = v21;
    -v3;
    v24++;
}
