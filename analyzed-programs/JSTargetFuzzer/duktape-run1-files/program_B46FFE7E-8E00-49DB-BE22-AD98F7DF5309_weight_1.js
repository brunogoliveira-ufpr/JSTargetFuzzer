class C3 {
    static #n(a5) {
        const v9 = !a5;
        Math.atan("source");
        v9 || "source";
        return "source";
    }
    static h;
    static 536870912 = 1122264570;
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function f15(a16, a17, a18, a19) {
    const o29 = {
        __proto__: v13,
        o(a21, a22) {
            return 1122264570;
        },
        "d": v14,
        set e(a25) {
            super.a = a19;
        },
    };
    return o29;
}
const v30 = f15("source", "source", "source", v12);
f15(C3, C3, v14, v30);
f15(v14, "source", v12, v12);
function f33() {
    return v12;
}
const o34 = {
    "apply": f33,
    "call": f33,
    "construct": f33,
    "deleteProperty": f33,
    "get": f33,
    "isExtensible": f15,
    "preventExtensions": f33,
};
new Proxy(v30, o34);
