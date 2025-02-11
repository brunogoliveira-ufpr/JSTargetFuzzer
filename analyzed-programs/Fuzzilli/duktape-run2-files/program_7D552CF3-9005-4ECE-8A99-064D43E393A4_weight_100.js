function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
const v6 = new F3(-4294967297);
const v7 = new F3(256);
const v8 = new F3(-4294967297);
function f9(a10, a11, a12, a13) {
    const o24 = {
        set g(a15) {
            v8[a15];
            f9.length = 1;
            a10[128] = this;
            const o18 = {
                "construct": f9,
                "isExtensible": f9,
            };
            new Proxy(a15, o18);
        },
        8: 256,
    };
    return o24;
}
f9(v7, v6, -4294967297, -10);
f9(v8, -4294967297, -10, 256);
f9(v6, -4294967297, -4294967297, -4294967297);
function f28(a29, a30, a31) {
    let v32;
    try { v32 = a31(f28, a31, f28, f28); } catch (e) {}
    return v32;
}
f28();
