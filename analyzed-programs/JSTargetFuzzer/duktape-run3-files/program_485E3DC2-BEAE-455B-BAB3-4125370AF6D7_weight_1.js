function f0() {
}
const v3 = new Int32Array(0);
new Uint32Array(243);
new Int8Array(6);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.e = a12;
}
const v14 = new F10(6, 0);
const v15 = new F10(0, 6);
const v16 = new F10(0, 243);
new f0();
function f21(a22, a23, a24) {
    const o25 = {
        [f0]: Int8Array,
        ...v3,
        "a": v14,
    };
    return o25;
}
f21(v14, 6, v16);
f21(v16, 8, v16);
f21(v15, 8, v15);
