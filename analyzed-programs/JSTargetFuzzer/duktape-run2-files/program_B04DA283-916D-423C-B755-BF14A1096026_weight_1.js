class C3 {
    set e(a5) {
        let v6 = 0;
        while (v6 < 7) {
            ("d")["match"](a5);
            v6++;
        }
    }
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function f15(a16, a17, a18) {
    const o19 = {
        7: "setBigInt64",
        ...a16,
        "b": a17,
        "f": a17,
        "c": a18,
        ...a18,
        ["d"]: "setBigInt64",
        [a18]: v12,
        __proto__: v13,
        "a": a17,
    };
    return o19;
}
const v20 = f15(C3, v13, v12);
const v21 = f15(v14, v13, v13);
f15(C3, v13, v14);
(v20 / v20) | C3;
!v20;
1073741825 >>> C3;
let [] = "d";
Object.defineProperty(v13, "d", { configurable: true, value: v21 });
Object.defineProperty("setBigInt64", v12, { enumerable: true, get: f15, set: f15 });
