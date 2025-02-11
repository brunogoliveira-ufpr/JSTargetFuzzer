function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 19515;
    this.c = 19515;
    this.a = 19515;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o15 = {
        "f": a7,
        [v3]: a7,
        get d() {
            const o9 = {
            };
            const v11 = new Proxy(this, o9);
            new F0(o9, a7, a7, v11);
            try {
                super.slice(v3, v3, a7);
            } catch(e14) {
            }
            return this;
        },
    };
    return o15;
}
f6(v5);
f6(v4);
f6(v3);
-Infinity;
const v22 = [-1.7976931348623157e+308,5.0,-1000000000000.0,Infinity,-1000.0,997546.8351609979,-1000000000000.0,2.2250738585072014e-308];
const v23 = [-1000000000.0,4.0];
const v24 = [-2.2250738585072014e-308,-8.71939175284712,1000.0,-4.0,4.0,-316334.68601765926,-1.445180044076247e+308,-303514.43909627676];
for (let i27 = 0, i28 = 10; i27 < i28; i27++, i28--) {
    function F36(a38, a39, a40, a41) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = a39;
    }
    const v42 = new F36(1e-15, v23, v5, v22);
    new F36(v42, v24, v5, v23);
    new F36(f6, v22, v3, v22);
}
