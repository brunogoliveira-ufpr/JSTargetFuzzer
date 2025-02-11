class C3 {
    p(a5, a6) {
        const v7 = 10 % this;
        a6[Symbol.toPrimitive] = this;
        const v11 = Symbol.iterator;
        const o20 = {
            [v11]() {
                let v13 = 10;
                const o19 = {
                    next() {
                        v13--;
                        const v17 = v13 == 0;
                        const o18 = {
                            "done": v17,
                            "value": v13,
                        };
                        return o18;
                    },
                };
                return o19;
            },
        };
        return v7;
    }
}
new C3();
const v22 = new C3();
new C3();
[0.3878039812002325,3.672953750542691e+307,-1000.0];
[-868430.0208186555,0.9152404340446902,0.0];
[0.7610543171637847,-927.1365984560982,1.0,-796997.8951239453,-5.931353468843419,0.23287058067309052];
const v33 = v22 ** -201593.7772696528;
const v34 = -4294967297 % v22;
~v22;
!v34;
Math.expm1(v33);
function f38() {
    return 1737856545;
}
