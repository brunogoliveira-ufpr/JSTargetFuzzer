function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1956989835;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
function f6(a7) {
    const o15 = {
        "d": v4,
        7: v4,
        __proto__: a7,
        ...v3,
        "g": v5,
        [v4](a9) {
            v5 = this[1073741823];
            const v11 = [-0.0,-5.0,-882151.1153517982,3.0,-48115.982167573646,-479.82043452710025,1.1001206310060598e+308,-4.0,615.7744587740713,-617.9043118128837];
            [-1000.0,7.146684185090724,0.3130375748770622,-863.9730256322766,-4.0,0.4001879592856341];
            const v13 = [0.0,4.0625559662063194e+307,4.82445623130123,0.00512733011810218,-1000.0,-8.87835105080949,0.06885832430287708,3.916916488541991e+307,220.62237926532748];
            try { v3.asin(a7, F0, v13, a7, v11); } catch (e) {}
            return F0;
        },
    };
    return o15;
}
const v16 = f6(v4);
f6(v5);
const v18 = f6(v3);
const v20 = new Set();
class C21 {
    static [v3] = v20;
    constructor(a23, a24) {
        v18[v16] = v18;
        try { v18.all(a24, F0, a23); } catch (e) {}
        const v28 = v4 ^ -2147483649;
        -2147483649 >>> v4;
        Math.round(v4);
        Math.log(v28 - -2147483649);
        Math.trunc(v4);
    }
}
const v34 = new C21(v16, v5);
const v35 = new C21(v16, v16);
const v36 = new C21(v35, v18);
!v36;
const o38 = {
};
new Proxy(f6, o38);
for (let v41 = 0; v41 < 32; v41++) {
    v34["p" + v41] = v41;
}
