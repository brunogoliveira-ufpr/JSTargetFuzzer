const v0 = [-1919091260,-1748958485,1551025787,536870912,268435456,23585,562019989,-536870912,5];
const v1 = [7,-2147483649,9,10];
const v2 = [-12,14,0];
function f3(a4) {
    const o5 = {
        __proto__: a4,
        "a": v1,
        0: a4,
        "b": v0,
        "e": v0,
        1413: v2,
        "d": v2,
        [v2]: v2,
        ...v2,
        "h": a4,
        [v1]: a4,
        8: v1,
    };
    return o5;
}
f3(v0);
f3(v1);
f3(v1);
const v14 = new Int8Array(3);
new Uint8ClampedArray(10);
let v20 = new Uint16Array(12);
const v21 = v20++;
[] = v14;
f3(v0);
try {
    f3(Uint16Array, v20, Int8Array, ...v2, -256, -256);
    f3(v2);
} finally {
    v1[v21] = v21;
    v2.valueOf = f3;
}
