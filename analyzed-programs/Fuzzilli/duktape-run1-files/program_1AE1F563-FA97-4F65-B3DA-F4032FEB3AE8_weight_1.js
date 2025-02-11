class C3 {
    #e;
    constructor(a5) {
        a5 <<= "number";
        try { a5(a5); } catch (e) {}
        try {
            const t6 = "number";
            t6.#e = "number";
        } catch(e7) {
        }
    }
    static ["number"] = "8f";
    c = "8f";
    static ["8f"] = "number";
}
new C3("get");
new C3("number");
const v10 = new C3("number");
const v13 = new Float32Array(3135);
new Uint32Array(1000);
const v19 = new BigInt64Array(2883);
const t21 = "number";
t21.length &&= 2883;
v19 | 3135;
try {
const t0 = "number";
t0(3135, 3135, Float32Array);
} catch (e) {}
const v22 = [C3];
[v10,v22,v13,v22,Uint32Array];
const t29 = "get";
t29[65536] = [BigInt64Array,BigInt64Array,v22,v13,1000];
