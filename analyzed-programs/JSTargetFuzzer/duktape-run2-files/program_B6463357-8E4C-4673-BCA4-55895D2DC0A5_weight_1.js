const v3 = [1073741825,16,10,-3,-2147483648,-62843,1780686867,7];
const v4 = [51003,-1028881196,1953545293,0,12,-536870912,-1472670206,4294967297];
const v5 = [-36756,5,42028,6];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v3;
    this.d = v4;
    this.e = v5;
}
const v10 = new F6(v4, v4);
const v11 = new F6(v4, 268435441);
const v12 = new F6(v4, v5);
function f13(a14, a15, a16) {
    const o17 = {
        [a16]: -65537,
        ...a14,
        "a": a15,
        [v5]: v3,
        "b": v5,
        129: 268435441,
        __proto__: a14,
        "d": v5,
        "f": a14,
        ...v4,
        "g": v5,
        "e": F6,
    };
    return o17;
}
const v18 = f13(v12, v10, 512);
f13(v10, v10, 512);
f13(v11, v18, 268435441);
v18.a = 512;
for (let i25 = 0; i25 < 10; i25++) {
}
