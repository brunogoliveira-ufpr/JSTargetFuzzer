let v0 = "symbol";
function f6(a7, a8) {
    const o26 = {
        "c": v0,
        [-4294967296](a10, a11, a12) {
            ({"f":a8,...a12} = a8);
            let [v13,v14,,v15] = "log10";
            try { new v13(a8, a12, a7, this); } catch (e) {}
            v0--;
            return 6;
        },
        "e": a8,
        [2147483649](a19, a20, a21, a22) {
            const t13 = "log10";
            t13[a8] = a21;
            for (let v23 = 0; v23 < 32; v23++) {
                this["p" + v23] = v23;
            }
            return 2147483649;
        },
    };
    return o26;
}
const v27 = f6(-4294967296, f6);
const v28 = f6(6, v0);
const v29 = f6(v0, "log10");
function f30(a31, a32, a33) {
    const o42 = {
        "f": "log10",
        [f6]: a33,
        "e": 6,
        "h": a31,
        get b() {
            v0 = this;
            a32[4] |= a33;
            new f6(-4294967296, 6);
            f6(2147483649, v28);
            Math.fround(5);
            !a31;
            return Math.random();
        },
    };
    return o42;
}
f30(6, v0, 2147483649);
f30(2147483649, v27, 6);
f30(6, v29, 6);
if (f30 !== 2147483649) {
    false === false;
} else {
    const o51 = {
        "maxByteLength": 10,
    };
    const v53 = new SharedArrayBuffer(10, o51);
    new Uint16Array(v53);
}
