function f3() {
    return -2147483648;
}
class C4 extends f3 {
    static #f = f3;
    static #g;
    [15];
    static set a(a6) {
        for (const v7 in this) {
            delete a6?.[714];
        }
        this[-2147483648] = 15;
        new Int32Array(129);
        new Uint8Array(6);
        new Int16Array(4);
    }
}
const v18 = new C4();
new C4();
const v20 = new C4();
const v22 = [v20,15,-2147483648,null];
[-2147483648,v22,v22,15,f3];
[f3,v22,f3,v18,v18];
for (let i26 = 0; i26 < 10; i26++) {
    v20.a = i26;
    v22.__proto__;
}
