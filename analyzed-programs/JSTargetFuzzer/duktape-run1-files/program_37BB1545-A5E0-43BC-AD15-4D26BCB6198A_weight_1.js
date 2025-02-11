const v3 = [-2147483649,-2147483649,-2147483649];
const v4 = [v3];
const v5 = [v3,v3,8,v4,8];
const v7 = new Set();
function f8(a9, a10) {
    const o18 = {
        "g": a9,
        get e() {
            v4[2147483648] = this;
            let v12;
            try { v12 = v3.entries(); } catch (e) {}
            const v13 = delete v12?.[8];
            try { v13(v13, 8, v13, v13); } catch (e) {}
            return v13;
        },
        "f": Set,
        [v7]: v4,
    };
    return o18;
}
f8(-362331718, -362331718);
const v20 = f8(8, 8);
const v21 = f8(-2147483649, 8);
class C22 {
    #g = -2147483649;
    static d = v5;
    constructor(a24, a25, a26) {
        try {
            a24.#g;
        } catch(e28) {
        }
    }
    512 = v4;
    [f8];
    [v21];
    #a;
    static #c;
}
const v29 = new C22(v20, v3, v4);
const v30 = new C22(v20, v29, v4);
const v31 = new C22(v21, v5, v4);
let v32 = 0;
while (v32 < 0) {
    let v35;
    try { v35 = v31.create(v30, v29); } catch (e) {}
    v35 + v21;
    v32++;
}
