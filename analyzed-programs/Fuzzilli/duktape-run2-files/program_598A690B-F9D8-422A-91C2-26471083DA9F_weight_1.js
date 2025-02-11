function f0() {
    const o19 = {
        n(a5, a6) {
            const o7 = {
            };
            new Proxy(a5, o7);
            super.b |= 1.7976931348623157e+308;
            new Uint8ClampedArray(1457);
            new Int32Array(165);
            new Float32Array(49);
            return 1457;
        },
    };
    return o19;
}
const v20 = f0();
let v21 = f0();
let v22 = f0();
class C23 extends f0 {
    d;
    static get g() {
        let v24 = this;
        const o25 = {
            __proto__: v21,
            ...v22,
            [v22]: f0,
            "c": v20,
        };
        v24 = o25;
        return v21;
    }
    a = v22;
    [v20] = v20;
}
new C23();
new C23();
new C23();
class C29 extends C23 {
    set e(a31) {
        v22 = v20;
        C23++;
        const o35 = {
            "maxByteLength": 16,
        };
        const v37 = new ArrayBuffer(16, o35);
        new DataView(v37);
    }
}
const v40 = new C29();
const v41 = new C29();
new C29();
const v48 = --v21;
Math.imul(v48, v48);
const v50 = +-1687751449;
const v51 = Math.max(-1687751449);
Math.cosh(v48);
function F53(a55, a56, a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 0.0;
    this.e = Infinity;
    this.d = a58;
}
new F53(v48, v41, 1.4904613463456338e+308, v48);
new F53(v50, v20, Infinity, Infinity);
new F53(v50, v40, Infinity, v51);
