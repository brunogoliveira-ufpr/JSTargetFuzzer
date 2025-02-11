class C3 {
    set c(a5) {
        a5?.[a5];
        Object.defineProperty(a5, 7, { writable: true, configurable: true, value: a5 });
    }
    constructor(a11) {
        a11[Symbol.isConcatSpreadable] = this;
    }
    [-1];
    [65537] = 3.0;
}
const v14 = new C3(128);
const v15 = new C3(C3);
const v16 = new C3(v14);
function f23() {
    return 65537;
}
v15 / 1024;
let v28 = 0;
while (v28 < 8) {
    v14[v16] = 1024;
    v16[8];
    v28++;
}
