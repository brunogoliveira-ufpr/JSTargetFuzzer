function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.e = a5;
}
new F3("bigint");
const v7 = new F3("mk1Jl");
const v8 = new F3("iterator");
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
}
const v15 = new F9("mk1Jl", v7, v7, v7);
const v16 = new F9("bigint", v8, v7, v15);
new F9("iterator", v7, v16, v8);
function f18() {
    const o22 = {
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
    return o22;
}
const v23 = f18();
const v24 = f18();
const v25 = f18();
v23[16];
const t33 = "localeCompare";
t33[2147483648] = "DBBG0";
for (let v33 = 0; v33 < 91; v33++) {
    const v35 = Symbol.species;
    v24[v35] = v35;
}
for (let v36 = 0; v36 < 32; v36++) {
    function F37(a39, a40, a41, a42) {
        if (!new.target) { throw 'must be called with new'; }
        try {
        const t0 = 1248382289;
        t0();
        } catch (e) {}
    }
    new F37(F37, F37, F37, F37);
    v25["p" + v36] = v36;
}
