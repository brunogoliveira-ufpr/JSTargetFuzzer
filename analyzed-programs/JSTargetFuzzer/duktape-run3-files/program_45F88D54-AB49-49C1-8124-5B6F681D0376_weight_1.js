class C3 {
    m(a5, a6) {
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return 2n;
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
const v21 = /(?:a{5,1000000}){3,1000000}+/ig;
const v22 = /(?: foo )7/vs;
const v23 = /(?<!)/ys;
function f24(a25, a26, a27, a28) {
    const o39 = {
        "b": C3,
        "f": 4n,
        ...a25,
        "e": -4294967296n,
        get d() {
            new Uint16Array(5);
            new Int32Array(1026);
            new Int8Array(6);
            return Uint16Array;
        },
    };
    return o39;
}
const v40 = f24(C3, v19, v23, v18);
const v41 = f24(v19, v40, v22, v40);
f24(v20, v41, v21, v41);
let v43 = [1000000000000.0,760570.3260385634];
[-1.7976931348623157e+308,NaN,1000000000000.0,-1.3377178628408473,2.220446049250313e-16,9.5345042269421e+307,1000000000.0];
const v45 = [-3.0,2.0];
v43 *= v45;
new Map();
let v51 = v45.length;
f24(v40, v18, v23, v51);
v21[v23] = v51;
v51 &&= -5;
