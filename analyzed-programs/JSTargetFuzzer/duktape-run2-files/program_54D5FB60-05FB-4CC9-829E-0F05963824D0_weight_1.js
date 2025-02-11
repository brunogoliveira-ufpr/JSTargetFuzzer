new Int8Array(10);
new Uint32Array(4096);
new Uint8ClampedArray(127);
function f12() {
    const o16 = {
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
    return o16;
}
f12();
f12();
function f22() {
    const o28 = {
        ["b"]: "b",
        "d": 14,
        __proto__: "d",
        "e": 14,
        [14]: "d",
        ["b"]: "b",
        "f": "d",
        o() {
            let v27 = this[3];
            v27 %= v27;
            return v27;
        },
        "b": "d",
        "g": "b",
        "h": 14,
    };
    return o28;
}
const v29 = f22();
const v30 = f22();
const v31 = f22();
Symbol.species;
const o35 = {
};
const v36 = [-430638373,-65535,11,-4294967295,257,-1031279791,9007199254740991,-32232,-4096];
function f37(a38, a39, a40, a41) {
    a41 * v36;
    return a40;
}
v29[16];
const t51 = "localeCompare";
t51[2147483648] = "DBBG0";
for (let v49 = 0; v49 < 91; v49++) {
    const v51 = Symbol.species;
    v30[v51] = v51;
}
for (let v52 = 0; v52 < 32; v52++) {
    v31["p" + v52] = v52;
}
