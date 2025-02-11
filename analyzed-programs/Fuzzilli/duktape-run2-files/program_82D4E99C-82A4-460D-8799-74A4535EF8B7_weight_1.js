const v2 = new Array(16);
function f6(a7, a8, a9, a10) {
    const o11 = {
        [v2]: a8,
        "c": a8,
        "b": a9,
        "e": 9007199254740992,
        "g": a8,
        "a": v2,
        "h": v2,
        ...Array,
        "d": v2,
        "f": 9007199254740992,
    };
    return o11;
}
f6(17441, 17441, 9007199254740991, 16);
f6(9007199254740991, 16, f6, 16);
const v14 = f6(17441, 9007199254740991, f6, 17441);
Array(16);
v2[1] *= 17441;
v14.g %= 17441;
function f16(a17) {
    return a17;
}
class C18 extends f16 {
    static e = 17441;
    g = f6;
    3208267875;
    static #c;
}
