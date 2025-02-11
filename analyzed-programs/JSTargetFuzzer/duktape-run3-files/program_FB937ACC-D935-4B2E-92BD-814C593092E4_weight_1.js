class C3 {
    6;
    5 = -1024;
    #m(a5, a6) {
        const o7 = {
            __proto__: this,
            3715626717: a5,
        };
        try { a5(this); } catch (e) {}
        return -1024;
    }
}
const v9 = new C3();
const v10 = new C3();
const v11 = new C3();
function f12(a13, a14, a15, a16) {
    const o31 = {
        [v9](a18, a19, a20, a21) {
            function F22(a24, a25, a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = C3;
                this.d = v10;
            }
            const v28 = new F22(a13, a13, a15, a19);
            new F22(this, v9, a19, v28);
            new F22(v10, v9, a16, a16);
            return v10;
        },
    };
    return o31;
}
f12(C3, -1024, C3, v9);
const v33 = f12(v11, C3, C3, v11);
f12(v10, v11, v33, v33);
"7Wx" instanceof f12;
if (v33 === -1024) {
    new Float64Array(2);
    new Uint32Array(2220);
    new Uint8ClampedArray(1);
} else {
    v10 ^ v33;
}
