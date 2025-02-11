class C3 {
    static #n(a5, a6) {
        let [] = a5;
        let v8;
        try { v8 = a6["toString"](); } catch (e) {}
        this[-4294967295] &&= a5;
        Object.defineProperty("toString", "g", { writable: true, enumerable: true, value: a6 });
        v8?.b;
        const o12 = {
            "maxByteLength": 3580588184,
        };
        const v14 = new ArrayBuffer(838, o12);
        const v16 = new Uint8ClampedArray(v14);
        return v16;
    }
}
const v17 = new C3();
const v18 = new C3();
const v19 = new C3();
const v20 = [v17,C3];
const v21 = ["MIN_VALUE",-4294967295,v20,-238.72328270163496,v19];
const v22 = [v19,"MIN_VALUE"];
function f23(a24, a25, a26, a27) {
    const o37 = {
        set b(a29) {
            a29 = v17;
            const t25 = "MIN_VALUE";
            delete t25?.length;
        },
        [a25]: a24,
        toString(a32, a33) {
            return a26;
        },
        ..."MIN_VALUE",
        [a27]: a24,
        __proto__: C3,
    };
    return o37;
}
f23(v20, v22, v21, v17);
f23(v20, C3, v20, "MIN_VALUE");
f23(v18, "MIN_VALUE", v22, v18);
function f41(a42) {
    return v21;
}
class C43 extends f41 {
    static #h;
    h = v19;
}
f41(v17);
for (let v45 = 0; v45 < 32; v45++) {
    v19["p" + v45] = v45;
}
