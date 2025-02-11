const v1 = new Map();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = Map;
}
const v9 = new F5(-11n, 37719n);
const v10 = new F5(v9, 14n);
const v11 = new F5(v10, -11n);
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 37719n;
    this.h = a18;
}
const v20 = new F15(v10, Map, -1);
const v21 = new F15(v9, -1, v9);
const v22 = new F15(v11, v20, 14n);
new Map(4096, v21, v22, 4096, F5, -1);
for (let v24 = 0; v24 < 32; v24++) {
    v1["p" + v24] = v24;
}
