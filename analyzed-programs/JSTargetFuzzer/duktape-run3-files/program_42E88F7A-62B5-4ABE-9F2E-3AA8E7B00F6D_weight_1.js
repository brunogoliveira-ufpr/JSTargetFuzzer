function f0() {
}
const v1 = [f0];
const v2 = [v1,v1,f0,v1];
const v3 = [v2];
function f4(a5) {
    const o14 = {
        "d": v3,
        ...v3,
        get g() {
            512 >>> this;
            Math.cos(this);
            512 * 1e-15;
            return 512;
        },
    };
    return o14;
}
const v15 = f4(v1);
const v16 = f4(v1);
const v17 = f4(v1);
function f18(a19, a20) {
    const o29 = {
        __proto__: a19,
        ...v3,
        "d": v3,
        [a20](a22, a23, a24) {
            class C25 {
                [v15] = a23;
                g = a22;
                static 3 = a20;
            }
            new C25();
            new C25();
            new C25();
            return v1;
        },
    };
    return o29;
}
const v30 = f18(v1, v16);
const v31 = f18(v2, v17);
const t40 = f18(v2, v17);
t40[f18] >>>= v3;
Object.defineProperty(v1, v30, { writable: true, enumerable: true, set: f4 });
for (let v33 = 0; v33 < 32; v33++) {
    v3["p" + v33] = v33;
}
Object.defineProperty(v17, 0, { get: f0 });
v31[65537];
