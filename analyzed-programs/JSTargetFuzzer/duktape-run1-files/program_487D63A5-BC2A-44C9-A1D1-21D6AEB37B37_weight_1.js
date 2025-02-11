class C3 {
    toString(a5, a6) {
        const t2 = "fromEntries";
        t2[2] >>= a6;
        const o8 = {
            valueOf() {
                Object.defineProperty("fromEntries", this, { configurable: true, value: this });
                return 2;
            },
        };
        return a5;
    }
    static 7 = 2;
}
const v9 = new C3();
const v10 = new C3();
const v11 = new C3();
const v12 = [-13952,-10,-1073741824,-13];
const v13 = [1073741825,-9007199254740992,-15,-2147483647,1343190202,-128];
const v14 = [9007199254740992,2003900849,-13429];
function f15(a16, a17, a18) {
    const o30 = {
        "e": C3,
        "d": v14,
        __proto__: v9,
        set h(a20) {
            function F21(a23, a24, a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = v10;
            }
            new F21(a16, this, a20, v9);
            const v28 = new F21(a20, v14, v13, "fromEntries");
            new F21(v12, v28, v14, a18);
        },
    };
    return o30;
}
const v31 = f15(v11, v10, v11);
f15(v10, v14, f15);
const v33 = f15(C3, v12, v31);
function* f34(a35, a36, a37) {
    v12.length **= 10;
    a35[4] = v31;
    let [...v38] = a37;
    yield a37;
    return v38;
}
f34(v13, v33, v14);
