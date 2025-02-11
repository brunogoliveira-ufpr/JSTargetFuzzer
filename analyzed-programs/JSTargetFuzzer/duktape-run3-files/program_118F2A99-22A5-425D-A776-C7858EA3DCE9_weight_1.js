function f0() {
    const o8 = {
        __proto__: "n",
        [-1000000000000.0]: -1000000000000.0,
        [4294967295]: "n",
        get g() {
            let v4 = this;
            super.e = v4;
            const o7 = {
                valueOf() {
                    v4 = this;
                    v4.c = -1000000000000.0;
                    try {
                    const t0 = "n";
                    new t0(..."n", 4294967295, this, 4294967295);
                    } catch (e) {}
                    return -1000000000000.0;
                },
            };
            return v4;
        },
    };
    return o8;
}
const v9 = f0();
f0();
const v11 = f0();
const v14 = new Int32Array(4096);
const v17 = new Uint16Array(3082);
new BigUint64Array(19);
let v21 = 2405681;
[v21] = v17;
f0();
v17.c = v11;
let v25 = 0;
do {
    let {"d":v26,"g":v27,...v28} = v9;
    try { v21(v26, v27); } catch (e) {}
    v21 *= v21;
    v14[-22665];
    v25++;
} while (v25 < 2)
