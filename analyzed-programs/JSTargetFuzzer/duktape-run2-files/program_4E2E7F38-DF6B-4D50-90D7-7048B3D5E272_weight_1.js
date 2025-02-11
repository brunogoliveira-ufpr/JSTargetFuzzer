class C3 {
    1;
    #c;
    [NaN] = NaN;
    #d = "deleteProperty";
    get a() {
        let v4 = this;
        v4 += v4;
        return "-2147483648";
    }
    static 10 = "deleteProperty";
    #g;
}
const v5 = new C3();
const v6 = new C3();
const v7 = new C3();
function f8(a9, a10, a11, a12) {
    const o25 = {
        "h": a12,
        [a9]: v6,
        "c": v5,
        "d": v5,
        [NaN](a14, a15) {
            NaN > a14 ? NaN : a14;
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = v7;
            }
            new F18(a14, C3);
            new F18(a12, a15);
            const v24 = new F18(a12, a15);
            return v24;
        },
    };
    return o25;
}
f8(v6, v5, v7, C3);
f8(v5, v6, v5, C3);
const v28 = f8(C3, C3, v6, v6);
switch (v28) {
    case v6:
        break;
        break;
}
~0;
f8 ** f8;
0 >>> v28;
