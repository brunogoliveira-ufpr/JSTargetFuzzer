function f0() {
    const o8 = {
        [30185]: 30185,
        get c() {
            delete this[6];
            const v6 = super.d;
            v6.valueOf = v6;
            const v7 = v6?.[8];
            v7.c = v7;
            return 7;
        },
        [7]: 30185,
        [-2.0]: 30185,
        "b": 7,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
class C12 extends f0 {
    static [v11];
    static 5;
    set e(a14) {
        if (a14) {
            super.b ||= a14;
        } else {
            v9.c |= a14;
        }
    }
    static [v10] = f0;
    [v11] = v11;
}
const v16 = new C12();
const v17 = new C12();
new C12();
class C20 extends C12 {
    h;
    constructor(a22, a23, a24) {
        super();
        function f25() {
            return C12;
        }
    }
    #a = v11;
    static b;
    static d;
    static #c;
    static 4;
}
const v26 = new C20(v17, v17, v16);
new C20(v17, v11, v26);
const v28 = new C20(v26, v16, v26);
const o29 = {
    "setPrototypeOf": f0,
};
const v31 = new Proxy(v28, o29);
let [] = v31;
v10 >= o29;
v16 >> v31;
new Int8Array(8);
new BigInt64Array(4);
new BigUint64Array(4);
