function f9() {
    return 2147483648;
}
function f10() {
    const o14 = {
        ["b"]: "b",
        "d": 14,
        __proto__: "d",
        "e": 14,
        [14]: "b",
        ["d"]: "b",
        "f": "d",
        "b": "b",
        "g": "b",
        "h": 14,
    };
    return o14;
}
const v15 = f10();
const v16 = f10();
const v17 = f10();
v15[16];
const t21 = "localeCompare";
t21[2147483648] = "DBBG0";
for (let v25 = 0; v25 < 91; v25++) {
    const v27 = Symbol.species;
    v16[v27] = v27;
}
for (let v28 = 0; v28 < 32; v28++) {
    v17["p" + v28] = v28;
}
