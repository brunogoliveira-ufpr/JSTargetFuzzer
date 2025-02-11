const v3 = [536870888,536870888,-2147483647,-872657631,-9223372036854775807];
const v4 = [-9832,9007199254740990,12,80479432];
const v5 = [-256,9007199254740990,256,22645,1548835183,-4,536870887,313472946,9007199254740990];
function f6(a7, a8) {
    const o16 = {
        get a() {
            v4[-1] = a7;
            for (let v10 = 0; v10 < 60; v10++) {
                const v13 = [v10,4,v10 >>> this,v5,v5];
                Reflect.apply(a8.splice, v4, v13);
            }
            return this;
        },
        "d": v3,
    };
    return o16;
}
const v17 = f6(-9, v3);
const v18 = f6(536870889, v4);
f6(536870889, v5);
class C20 extends f6 {
    static [v4];
    constructor(a22, a23, a24, a25) {
        super(a25, v5);
        typeof 536870889 === "number";
        super.d = v17;
    }
    e = f6;
    #g;
    static e = 536870889;
    f = v3;
}
const v29 = new C20(v5, v18, v4, 4);
const v30 = new C20(v17, v29, v3, 536870889);
const v31 = new C20(v30, v18, v4, -9);
new C20(v31, v31, v3, -9);
const v34 = Symbol.iterator;
const o43 = {
    [v34]() {
        let v36 = 10;
        const o42 = {
            next() {
                v36--;
                const v40 = v36 == 0;
                const o41 = {
                    "done": v40,
                    "value": v36,
                };
                return o41;
            },
        };
        return o42;
    },
};
