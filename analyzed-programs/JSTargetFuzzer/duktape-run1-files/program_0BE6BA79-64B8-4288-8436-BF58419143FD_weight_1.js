function f1() {
    const o6 = {
        toString() {
            let v4;
            try { v4 = this["fromCodePoint"]("fromCodePoint"); } catch (e) {}
            let {"f":v5,} = v4;
            super.d = v5;
            return true;
        },
        [true]: true,
        "d": true,
        9: true,
        ...true,
        1000: true,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
const v9 = f1();
function f10(a11) {
    const o19 = {
        [-2]: a11,
        ...v9,
        valueOf(a13, a14, a15, a16) {
            let o17 = {
                ...v8,
            };
            o17 = a11;
            a11[a11];
            return true;
        },
        "a": f1,
        [f1]: true,
    };
    return o19;
}
f10(v7);
f10(v9);
f10(v8);
const v26 = v7.constructor;
class C27 extends v26 {
    g;
    static 6;
    #a = v26;
}
new C27();
f1 >>> true;
