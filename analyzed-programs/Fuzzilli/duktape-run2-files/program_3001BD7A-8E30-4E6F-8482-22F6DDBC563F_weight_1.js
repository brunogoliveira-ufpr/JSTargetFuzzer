const v0 = [-0.0,4.026074217567238,0.22079137851640274,4.503659027337074e+307,3.0,-180.21289146345305,8.997616941249532,1.7976931348623157e+308,5.0,1.7572907743925477e+308];
const v1 = [0.0,5.0,1.7976931348623157e+308,-744090.3903455172,Infinity,-1.0,-156.32185570731588,-955.3468127215082];
const v2 = [1000000.0,1.3246538909435923,-2.049046220488763e+307,1000.0];
class C3 {
    static set f(a5) {
        super.e = v1;
        for (let v6 = 0; v6 < 100; v6++) {
            super.d %= v6;
        }
    }
    a;
    static #f;
    h = v1;
    c = v2;
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
function f13(a14, a15, a16) {
    const o31 = {
        __proto__: v10,
        "g": v0,
        set a(a18) {
            this in v11;
            const v21 = Symbol.iterator;
            const o30 = {
                [v21]() {
                    let v23 = 10;
                    const o29 = {
                        next() {
                            v23--;
                            const v27 = v23 == 0;
                            const o28 = {
                                "done": v27,
                                "value": v23,
                            };
                            return o28;
                        },
                    };
                    return o29;
                },
            };
        },
    };
    return o31;
}
f13(v11, v1, v12);
f13(v10, v1, f13);
f13(v11, v2, v11);
const v37 = new Uint16Array(3868);
new Float64Array(2);
new Float32Array(8);
for (const v44 of v1) {
    v37[v10] = C3;
    break;
    const v46 = Symbol.iterator;
    const o55 = {
        [v46]() {
            let v48 = 10;
            const o54 = {
                next() {
                    v48--;
                    const v52 = v48 == 0;
                    const o53 = {
                        "done": v52,
                        "value": v48,
                    };
                    return o53;
                },
            };
            return o54;
        },
    };
}
