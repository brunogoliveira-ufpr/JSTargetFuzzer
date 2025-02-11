new Array(2267);
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.c = 536870889;
}
const v11 = new F6(2267, 536870889, F6);
const v12 = new F6(1073741825, 2267, v11);
const v13 = new F6(5, 1073741825, F6);
class C14 {
    static #e;
    static #o(a16, a17, a18) {
        -a18;
        let v21 = -9223372036854775807;
        ~v21;
        const v25 = ++v21;
        Math.atan(v13);
        v13 + v25;
        return v12;
    }
}
const v28 = new C14();
new C14();
new C14();
const v31 = v28.__proto__;
const v32 = new Array(536870889);
v11.a -= v31;
Object.defineProperty(v13, "f", { writable: true, configurable: true, value: v28 });
for (let v33 = 0; v33 < 36; v33++) {
    new Date();
}
var f = v11;
v32.toString = v31;
