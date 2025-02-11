function f0() {
}
function f1() {
    return f0;
}
const v4 = new Int8Array(1983);
const v7 = new BigUint64Array(2110);
const v10 = new Int32Array(139);
const v11 = [v10,f0,139,f1];
let v12 = [1983,v11];
v12 >>= [v10,v12,Int32Array,f0,v12];
Object.defineProperty(v11, 2, { enumerable: true, get: f1, set: f1 });
v10[v4.length] = v7;
class C15 {
    a = Int32Array;
    c = BigUint64Array;
    static #e = v11;
}
new C15();
new C15();
new C15();
