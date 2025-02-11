function f0() {
    const o11 = {
        set b(a5) {
            const v6 = a5 ^ 85666.11901262985;
            try { a5(v6, a5, -9.530310699520326, v6); } catch (e) {}
            typeof 1024 === "symbol";
        },
        "a": -9.530310699520326,
        "b": 85666.11901262985,
        ...1024,
        1: 1024,
        "h": -9.530310699520326,
    };
    return o11;
}
let v12 = f0();
const v13 = f0();
const v14 = f0();
function f18(a19, a20, a21, a22) {
    const o27 = {
        ...a20,
        get h() {
            -Infinity;
            return -2.9193274970472167;
        },
        2147483649: a21,
        [v14]: v12,
        "e": v13,
        "b": v13,
        "a": v12,
    };
    return o27;
}
const v28 = f18(NaN, v14, -39078.23456949531, v12);
const v29 = f18(NaN, v28, 430341.14525395934, v28);
const v30 = f18(f18, v29, 430341.14525395934, v29);
function f31() {
    return f0;
}
Object.defineProperty(v14, "d", { get: f31 });
for (let v32 in v30) {
    let v33;
    try { v33 = v14.resolve(-39078.23456949531, v14); } catch (e) {}
    ({"b":v33,"e":v12,"h":v32,} = v29);
    v33 + v33;
}
v14[Symbol.species] = v13;
