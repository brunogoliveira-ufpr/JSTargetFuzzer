function f0() {
    const o4 = {
        "h": 1000000000000.0,
        __proto__: "arguments",
        "b": 1000000000000.0,
        62: -4294967296,
        "g": 1000000000000.0,
        ["arguments"]: "arguments",
        "e": 1000000000000.0,
        ..."arguments",
        "d": "arguments",
        5: "arguments",
        1073741824: 1000000000000.0,
        "c": 1000000000000.0,
        [1000000000000.0]: "arguments",
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
f0();
class C8 extends f0 {
    static set h(a10) {
        this[a10] = this;
        delete this?.h;
    }
    n(a13) {
        function f14(a15, a16) {
            const o17 = {
                "b": v6,
                "g": this,
            };
            return o17;
        }
        f14(f14(f14, this), f14(v5, f0));
        return v5;
    }
}
new C8();
new C8();
const v23 = new C8();
const v24 = [v23,C8];
const v25 = [v24,f0,v24];
[v25,v25,v6,f0];
const o32 = {
    "maxByteLength": 1810,
};
const v34 = new ArrayBuffer(1810, o32);
new Float64Array(v34);
for (let v37 = 0; v37 < 32; v37++) {
    v6["p" + v37] = v37;
}
