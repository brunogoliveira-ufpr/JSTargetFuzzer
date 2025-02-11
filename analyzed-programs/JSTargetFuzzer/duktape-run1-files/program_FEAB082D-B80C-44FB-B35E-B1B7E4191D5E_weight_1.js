class C6 {
    [-534147707];
    constructor(a8, a9, a10) {
        try {
            super.valueOf(a10, this);
        } catch(e12) {
        }
    }
    static #a = -15;
    #h = "bigint";
    [4096];
}
const v13 = new C6("bigint", "string", "string");
const v14 = new C6(v13, "bigint", "string");
const v15 = new C6("bigint", v14, "bigint");
function f16(a17, a18, a19) {
    const o20 = {
        [-534147707]: a17,
        ...v15,
        ...v14,
        "h": 4096,
        "b": "bigint",
    };
    return o20;
}
f16("bigint", v13, C6);
f16("string", f16("p", v15, "bigint"), "bigint");
