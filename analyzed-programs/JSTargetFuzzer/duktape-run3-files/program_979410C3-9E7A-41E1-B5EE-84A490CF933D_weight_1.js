function f0() {
    const o12 = {
        "e": 1000.0,
        set d(a5) {
            function f6(a7) {
                const o8 = {
                };
                new Proxy(a7, o8);
                return a5;
            }
            f6(536870888);
        },
        2147483647: "object",
        __proto__: "object",
        "d": "object",
        "b": 1000.0,
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v15 = f0();
class C16 extends f0 {
    set b(a18) {
        let v17 = this;
        let v19;
        try { v19 = a18(v17, a18, v14, v15, v17); } catch (e) {}
        const v22 = ++v17;
        Math.atanh(v22 ** v22);
        v19 = Math.atan2(3, v17);
    }
    static #p(a27, a28) {
        !a28;
        Math.pow(-6, a28);
        Math.acosh(-1494659520);
        const v36 = -1494659520 - a27;
        const v37 = -1494659520 || a27;
        Math.min(-6);
        v36 ** 1.0;
        return v37;
    }
}
new C16();
let v41 = new C16();
new C16();
let v44 = "string";
function f46(a47, a48, a49) {
    const o64 = {
        "c": "string",
        p(a51, a52, a53) {
            a52.f = v15;
            const t51 = super.a;
            t51.c = a49;
            return v41;
        },
        set g(a59) {
            for (const v60 in v15) {
                [v44] = "valueOf";
            }
            try { a59.toString(this, "string", a47, a49, v14); } catch (e) {}
            try {
                super.flat(v13, a48);
            } catch(e63) {
            }
        },
    };
    return o64;
}
const v65 = f46(v15, v13, C16);
f46(v13, v14, v14);
f46(f46, v41, v41);
v13[CBOR.encode] = f46;
v41 **= C16;
const t72 = f0();
delete t72["valueOf"];
CBOR.encode(v65);
const o75 = {
};
new Proxy(C16, o75);
