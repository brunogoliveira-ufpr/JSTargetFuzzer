const v0 = [1341846681,1073741823,6,1073741823,4294967295];
const v1 = [3055];
const v2 = [-1024,7,6,9,5,65536];
function f3(a4, a5) {
    const o6 = {
        ...a4,
        "f": v2,
        "a": v2,
        "b": v2,
        "d": v0,
        "h": a5,
        [a5]: v2,
        [a4]: a4,
        ...v1,
        __proto__: v0,
        12: a4,
    };
    return o6;
}
const v7 = f3(v1, v2);
const v8 = f3(v0, v7);
const v9 = f3(v2, v7);
const v10 = [v9,v2,v1,v7,v7];
const v11 = [v9,f3,v8,v9,f3];
[v11,v9];
function f16(a17, a18) {
    const o19 = {
        "h": v2,
        ...v10,
        "g": a17,
        "b": v11,
        3: v7,
    };
    return o19;
}
f16(v7, 6.689843107153071e+307);
f16(v7, 594333.0181414993);
f16(v7, -164676.58931990864);
