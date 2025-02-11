function f0() {
}
class C1 extends f0 {
    #valueOf() {
        return 9007199254740991;
    }
    [f0] = f0;
    static {
        const v7 = this[10];
        super.a = this;
        this % v7;
        v7?.d;
        [-65537,-711634891,1235775797];
        [-1,452871341];
        [-9223372036854775808,-1024,31724,-60779,-1073741824];
    }
}
let v13 = new C1();
new C1();
new C1();
let v20 = new WeakMap();
const v26 = new Int16Array(1776);
const v29 = new Uint8Array(513);
new Uint8Array(84);
v13 = v29;
for (const v33 of v26) {
    const o34 = {
        "get": f0,
        "getPrototypeOf": f0,
    };
    new Proxy(v20, o34);
}
v20++;
