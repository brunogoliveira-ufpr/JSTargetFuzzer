function f0() {
}
function f1() {
    const o12 = {
        [f0]: f0,
        get a() {
            let v7 = 1073741824 * 5.0;
            const v8 = f0 || 1073741824;
            Math.pow(this, 1073741824);
            v8 / ++v7;
            return 5.0;
        },
    };
    return o12;
}
let v13 = f1();
let v14 = f1();
const v15 = f1();
class C16 {
    a;
    static {
    }
    valueOf(a22, a23) {
        let v24 = f1 << this;
        ({"a":v14,"b":v13,"f":v24,} = a22);
        Object.defineProperty(v24, v15, { writable: true, configurable: true, enumerable: true, get: f0, set: f0 });
        return v24;
    }
}
const v25 = new C16();
const v26 = new C16();
const v27 = new C16();
function f31(a32, a33, a34) {
    const o35 = {
        "b": v13,
        [v13]: 1000000.0,
        ...C16,
    };
    return o35;
}
f31(v25, v27, v13);
f31(v14, C16, 1000000.0);
f31(v26, v26, -318.58386744518396);
