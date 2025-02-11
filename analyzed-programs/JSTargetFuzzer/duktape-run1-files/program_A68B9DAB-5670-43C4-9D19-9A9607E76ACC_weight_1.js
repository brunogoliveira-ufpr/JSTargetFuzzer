const v0 = /Qz\x0f[a-zA-Z0-9][\[\]\{\}\(\)\%\^\ ]/ysg;
const v1 = /l[\ca]{}/miyg;
const v2 = /(?:ab){4,7}/umiys;
let v8 = 41542;
class C9 {
    static #o(a11, a12, a13, a14) {
        this[a14];
        v2["compile"](1073741823, a13, a13, this, a12);
        return v2;
    }
    constructor(a19, a20, a21) {
        a20 * v8;
        Object.defineProperty(a21, "c", { value: v2 });
        for (let v23 = 0; v23 < 32; v23++) {
            this["p" + v23] = v23;
        }
    }
}
new C9(536870912n, v8, v1);
const v27 = new C9(-2147483647n, 10, -1073741824n);
new C9(-2147483647n, v8, 1073741823);
try {
    1000000000000.0 && C9;
    let v33 = d;
    v33 = v27;
} finally {
    v8 = 10;
}
const v35 = [v27];
Reflect.apply(v2.test, v0, v35);
