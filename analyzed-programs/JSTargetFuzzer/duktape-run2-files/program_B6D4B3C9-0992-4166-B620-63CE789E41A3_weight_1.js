function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = false;
    this.h = false;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
let v6 = [F1,F1];
const v7 = [v6,v5,F1];
const v8 = [F1,v3];
const v9 = [v8,v8,F1];
const v10 = [v9,v9,v4,false];
[v10,v5,v10,v10,F1];
function f12() {
    return v7;
}
~v3;
let v17 = 0;
do {
    v3[false] = -7329n;
    v4[3] &&= v17;
    v6 = v10;
    v17++;
} while (v17 < 3)
