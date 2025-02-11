function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 256;
    this.d = 256;
    this.a = 256;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o23 = {
        ...v5,
        4: a7,
        [a7](a10, a11) {
            const v12 = this ^ v3;
            let v13;
            try { v13 = a7.keys(v12, this, a8, F0, a8); } catch (e) {}
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = v13;
                this.b = a16;
            }
            new F14(v5, v3, v3, a10);
            const v21 = new F14(F14, v4, this, v4);
            new F14(v21, a8, a11, a10);
            return v12;
        },
    };
    return o23;
}
const v24 = f6(v5, v4);
const v25 = f6(v3, v3);
const v26 = f6(v4, v5);
function f27() {
    return f6;
}
const v31 = 2 ^ v24;
if (f27) {
    const v32 = [v24,v31];
    [v3,v32,v32,v32,v4];
    [v26,f27,v32,v32,v24];
} else {
    let v35 = this;
    v25[-9007199254740991] /= -1121752414;
    v35 %= v35;
}
