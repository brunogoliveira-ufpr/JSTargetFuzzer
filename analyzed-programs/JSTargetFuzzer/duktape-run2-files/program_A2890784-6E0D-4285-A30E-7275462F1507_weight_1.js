class C3 {
    static #p(a5, a6) {
        const t2 = "o";
        t2.length **= 8;
        ("o").__proto__;
        a6 /= "unscopables";
        Object.defineProperty(a5, 16, { value: "o" });
        return a6;
    }
    ["unscopables"];
    static #b;
    static 65536;
    b;
    static f;
}
const v8 = new C3();
const v9 = new C3();
const v10 = new C3();
new Uint8ClampedArray(10);
new Uint16Array(3);
const v19 = new Float64Array(4096);
function f20(a21, a22, a23, a24) {
    const o25 = {
        "a": Uint8ClampedArray,
        "h": a23,
        9: v19,
    };
    return o25;
}
f20(v10, v8, v9, 10);
f20(v10, v8, v8, 4096);
f20(v10, v8, v10, 3);
