new Float64Array(5);
new Float32Array(6);
new Float64Array(2);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = Float32Array;
}
new F10(Float64Array, 5, 6, 2);
new F10(Float64Array, 5, 5, 2);
new F10(2, 2, 5, 5);
function f19() {
    const o23 = {
        ["b"]: "b",
        "d": 14,
        __proto__: "d",
        "e": "b",
        [14]: "b",
        ["d"]: "b",
        "f": 14,
        "b": "b",
        "g": "b",
        "h": 14,
    };
    return o23;
}
const v24 = f19();
const v25 = f19();
const v26 = f19();
v24[16];
const t28 = "localeCompare";
t28[2147483648] = "DBBG0";
for (let v34 = 0; v34 < 91; v34++) {
    const v36 = Symbol.species;
    v25[v36] = v36;
}
for (let v37 = 0; v37 < 32; v37++) {
    v26["p" + v37] = v37;
}
