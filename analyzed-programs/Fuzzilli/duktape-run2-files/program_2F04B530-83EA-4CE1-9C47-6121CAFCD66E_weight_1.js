function f3() {
    return 2;
}
class C4 extends f3 {
    static 9 = 2;
    set a(a6) {
        Object.defineProperty(this, a6, { configurable: true, enumerable: true, set: f3 });
    }
    static #e = 2;
    static d = 3;
    static [12];
    #c;
    #g;
    #h = 12;
    static #d;
    static e;
}
new C4();
const v8 = new C4();
let v9 = new C4();
new Array(4096);
Object.defineProperty(v9, "e", { writable: true, enumerable: true, get: Array });
var c = 12;
for (const v16 in Array) {
    let v17 = Array[v16];
    v17 = v9;
    v8[v16] >>= 268435439;
    const v18 = new Array(3);
    Array.of(2, 12, ...v18, v18, v8, ...v18);
}
v9++;
