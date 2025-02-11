function f0() {
    const o10 = {
        ["2147483648"](a5, a6) {
            return a5;
        },
        "c": -4.0,
        "d": -4.0,
        "b": 7,
        ..."2147483648",
        [-4.0]: -4.0,
        "f": 7,
        "g": -4.0,
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
class C14 {
    valueOf(a16) {
        return -9223372036854775808;
    }
    static 8 = f0;
    d = v13;
    static set c(a21) {
        f0();
        const v27 = Symbol.iterator;
        const o36 = {
            [v27]() {
                let v29 = 10;
                const o35 = {
                    next() {
                        v29--;
                        const v33 = v29 == 0;
                        const o34 = {
                            "done": v33,
                            "value": v29,
                        };
                        return o34;
                    },
                };
                return o35;
            },
        };
    }
}
const v37 = new C14();
new C14();
const v39 = new C14();
new Array(16);
Object.defineProperty(Array, 3, { writable: true, configurable: true, set: f0 });
v37.length = 1073741824;
const v47 = delete v39[1073741824];
v47 >= v47;
function F49(a51, a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v13;
    this.e = a53;
}
new F49(1073741824, v39, v13);
new F49(-536870912, v12, v11);
new F49(1073741824, v13, v11);
