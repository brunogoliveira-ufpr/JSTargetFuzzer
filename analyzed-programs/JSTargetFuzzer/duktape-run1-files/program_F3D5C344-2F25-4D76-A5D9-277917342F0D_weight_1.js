const v0 = [16,127,-9223372036854775807,-455911886,4096,257,-2147483647];
const v1 = [-2147483647,-22962,40915,16,65536,1711416395,4118,536870888];
const v2 = [-40795,-2147483648,40419];
function f3(a4, a5) {
    const o9 = {
        6: a5,
        "h": v2,
        [a4]: a4,
        [a5]: v1,
        "e": v2,
        m(a7) {
            a7[a4 = a7] **= v0;
            let v8;
            try { v8 = v1(v1, a7, v2); } catch (e) {}
            return v8;
        },
    };
    return o9;
}
const v10 = f3(v2, v1);
const v11 = f3(v1, v0);
const v12 = f3(v1, v1);
function f13(a14, a15, a16, a17) {
    const o24 = {
        o(a19, a20) {
            super.b;
            return a20[0];
        },
        "b": a14,
        "h": a16,
        "d": v0,
        "e": a17,
        __proto__: v10,
    };
    return o24;
}
f13(v0, v1, v0, v12);
f13(v2, v1, v1, v11);
f13(v2, v0, v1, v11);
for (let i30 = 0, i31 = 10; i30 < i31; i30++, i31--) {
    v10.e ||= i31;
}
