function f0() {
    const o12 = {
        set asyncIterator(a5) {
            function f6(a7) {
                return a7;
            }
            f6(a5);
        },
        "e": "g",
        "a": "g",
    };
    const t11 = "g";
    t11[4] = 65535;
    let v13;
    try { v13 = o12.deleteProperty(f0); } catch (e) {}
    try { new v13(); } catch (e) {}
    return o12;
}
f0();
f0();
f0();
const v23 = new Int8Array(9);
for (const v24 in v23) {
}
const v33 = Function();
const v36 = -2147483649 * -2147483649;
v36 % 12619211;
const o38 = {
    [v36]: v33,
};
