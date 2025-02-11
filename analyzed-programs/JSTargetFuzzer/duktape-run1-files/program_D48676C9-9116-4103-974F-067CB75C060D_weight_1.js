function f0() {
    const o11 = {
        ["Co"]: -2147483648,
        p(a5, a6) {
            const t4 = "Co";
            t4.length = 1;
            const o8 = {
            };
            new Proxy("Co", o8);
            return this;
        },
        __proto__: "Co",
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
const v15 = [v13,v14,f0,v13];
const v16 = [f0];
const v17 = [v13,v15,v16,v16];
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a23;
    this.f = a22;
    this.g = v15;
}
const v24 = new F18(v13, v15, v16, v15);
new F18(v13, v17, f0, v24);
const v26 = new F18(v12, v17, v24, v13);
v26.__proto__ = v14;
F18++;
const v31 = v17 & -65535;
f0();
v24[9] %= -65535;
v15.length ||= -65535;
v14.d = v31;
