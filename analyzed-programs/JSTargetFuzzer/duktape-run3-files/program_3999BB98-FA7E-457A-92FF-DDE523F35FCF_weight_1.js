function f0() {
    let v3 = 61882;
    const o13 = {
        get c() {
            let v6 = 14;
            let v7 = -268435456;
            +(v6 || --v3);
            --v7;
            ++v6;
            return v6;
        },
        [v3]: 4294967297,
        7: "callee",
    };
    return o13;
}
const v14 = f0();
f0();
f0();
class C20 {
    c = f0;
    n(a22, a23, a24) {
        switch (a24) {
            case a22:
                this.c;
                break;
        }
        return 127;
    }
    [v14];
    [f0] = 3;
    2782;
}
new C20();
const v28 = new C20();
new C20();
f0();
C20.e;
v28[1];
const o41 = {
    "maxByteLength": 1826015214,
};
const v43 = new ArrayBuffer(128, o41);
new Uint8ClampedArray(v43);
