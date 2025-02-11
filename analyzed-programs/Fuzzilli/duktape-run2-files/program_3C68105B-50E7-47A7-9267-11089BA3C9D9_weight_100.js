new Float32Array(5);
new Int16Array(6);
new Uint32Array(10);
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a17;
}
const v18 = new F15(-4294967297);
const v19 = new F15(256);
const v20 = new F15(-4294967297);
function f21(a22, a23, a24, a25) {
    const o36 = {
        set g(a27) {
            v20[a27];
            v18.length = 1;
            a22[128] = this;
            const o30 = {
                "construct": f21,
                "isExtensible": a22,
            };
            new Proxy(a27, o30);
        },
        8: 256,
    };
    return a24;
}
f21(v19, -4294967297, -4294967297, 256);
f21(v20, -10, -10, 256);
f21(v18, -4294967297, -4294967297, -4294967297);
function f40(a41, a42, a43) {
    let v44;
    try { v44 = a43(f40, a43, f40, f40); } catch (e) {}
    return v44;
}
f40();
