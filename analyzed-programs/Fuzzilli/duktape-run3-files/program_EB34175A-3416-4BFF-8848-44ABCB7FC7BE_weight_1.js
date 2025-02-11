function f0() {
}
class C1 extends f0 {
    static valueOf() {
        for (const v3 of f0) {
            v3[this] *= v3;
            v3.valueOf = f0;
        }
        const o6 = {
            "maxByteLength": 269,
        };
        const v8 = new ArrayBuffer(269, o6);
        new Uint32Array(v8);
        return Uint32Array;
    }
}
new C1();
const v12 = new C1();
new C1();
const v14 = [-10,536870887,-11,9007199254740992,64];
const v15 = [3294];
const v16 = [4294967295,512,6,982846115];
function f18(a19, a20, a21) {
    const o27 = {
        "e": undefined,
        "a": a21,
        get b() {
            a20[2] = v12;
            for (const v23 in v15) {
                for (let v24 = 0; v24 < 32; v24++) {
                    this["p" + v24] = v24;
                }
            }
            return this;
        },
    };
    return o27;
}
const v28 = f18(v15, v12, v12);
const v29 = f18(v14, v15, v28);
f18(v16, v15, v29);
function f31(a32, a33) {
    const o34 = {
        ...a32,
        "b": a33,
    };
    Object.defineProperty(v15, a32, { configurable: true, value: C1 });
    return v29;
}
f31(v15, v28);
undefined + f18;
