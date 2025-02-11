function f0() {
    const o10 = {
        "b": 65536,
        ..."9007199254740992",
        "f": Infinity,
        set h(a5) {
            let v7;
            try { v7 = a5["setYear"](a5, this, Infinity, "9007199254740992"); } catch (e) {}
            try {
                super.valueOf(this, v7, "9007199254740992");
            } catch(e9) {
            }
        },
        __proto__: "9007199254740992",
    };
    return o10;
}
f0();
f0();
f0();
const v21 = new Map();
const v22 = ("-1073741824")[2];
Object.defineProperty(v21, "a", { set: f0 });
v21[129] -= 256;
let v23 = 0;
do {
    v21.toString = v22;
    const t27 = "f";
    delete t27["-1073741824"];
    f0();
    v23++;
} while (v23 < 10)
