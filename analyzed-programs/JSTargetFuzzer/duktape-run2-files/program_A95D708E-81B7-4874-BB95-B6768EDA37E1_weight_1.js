const v1 = new WeakMap();
function f8(a9, a10, a11, a12) {
    const o22 = {
        [-1]: "q2BR",
        7: a9,
        "b": a11,
        [a12](a14, a15, a16) {
            this[6];
            for (const v18 of a14) {
                const o19 = {
                };
                new Proxy(a14, o19);
            }
            return a11;
        },
    };
    return o22;
}
const v23 = f8("q2BR", WeakMap, "-39639", "q2BR");
const v24 = f8("symbol", 3, "q2BR", "q2BR");
const v25 = f8("symbol", v23, "q2BR", "q2BR");
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a29;
}
const v30 = new F26(v1, "-39639");
new F26(v24, "q2BR");
const v32 = new F26(v25, "q2BR");
for (const v36 in v32) {
    for (let v37 = 0; v37 < 32; v37++) {
        v30["p" + v37] = v37;
    }
}
