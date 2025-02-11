class C3 {
    [4096] = 4096;
    toString(a5, a6) {
        let v7 = 0;
        do {
            "yIvSu" | a6;
            a6.f ||= v7;
            v7++;
        } while (v7 < 9)
        return this;
    }
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function f15(a16, a17, a18) {
    const o27 = {
        m(a20, a21) {
            let v22 = 0;
            do {
                continue;
                try { a20(...a18, a17, v22, a18, a21, a20); } catch (e) {}
                v22++;
            } while (v22 < 5)
            return a17;
        },
    };
    return o27;
}
f15(v12, v14, v13);
f15(v12, v14, v13);
const v30 = f15(v12, v14, v14);
("yIvSu")[4096];
class C33 extends v12.constructor {
    [f15] = v30;
    h = C3;
}
const v34 = new C33();
Object.defineProperty("yIvSu", C3, { configurable: true, enumerable: true, get: f15 });
v34[7];
