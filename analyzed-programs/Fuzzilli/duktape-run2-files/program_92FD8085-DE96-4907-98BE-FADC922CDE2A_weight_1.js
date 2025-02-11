function f0() {
    const o9 = {
        "g": 465573751,
        __proto__: "getFloat32",
        [0.0]: "getFloat32",
        valueOf(a5, a6) {
            a6 /= 465573751;
            try {
                super.keyFor(465573751, 465573751);
            } catch(e8) {
            }
            return this;
        },
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
const v12 = f0();
class C17 extends f0 {
    static valueOf(a19, a20, a21, a22) {
        super.g;
        let v24;
        try { v24 = v12.valueOf(a22, v11); } catch (e) {}
        a21[this] = 31n;
        super.g;
        return v24;
    }
    static 151;
    #f = -16353n;
    static #e = 31n;
    [v10] = 31n;
}
new C17();
new C17();
new C17();
let v29 = 0;
while (v29 < 4) {
    for (let v32 = 0; v32 < 31; v32++) {
        v11[v32] = v32;
        v32 < v29;
    }
    v10[236] **= v29;
    v29++;
}
