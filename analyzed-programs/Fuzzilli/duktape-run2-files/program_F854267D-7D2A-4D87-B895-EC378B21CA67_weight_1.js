const v1 = new WeakMap();
class C2 {
    get d() {
        const o4 = {
        };
        new Proxy(this, o4);
        return WeakMap;
    }
    static [v1];
    constructor(a8) {
        let {"d":v9,"e":v10,} = this;
        v9[0] = v1;
        v1[1159];
        new WeakMap(this);
    }
    e;
}
const v13 = new C2(C2);
const v14 = new C2(v13);
new C2(v14);
[-5.339740938204258,-1.738499344694739e+308,-1.7976931348623157e+308,-5.0,7.585181288852788e+307,1000000000000.0,-1000000000000.0];
[-697503.9685699842,0.39290158746508386,1e-15,0.6592333680265312,-9.325299052134625e+307,-433.3087806635025,4.608221592203444e+307];
([2.0,1.0,-2.2250738585072014e-308,-1000000000000.0,-1.0,345.7887259771428])["push"](-1960459457n, C2);
const v28 = Symbol.iterator;
const o37 = {
    [v28]() {
        let v30 = 10;
        const o36 = {
            next() {
                v30--;
                const v34 = v30 == 0;
                const o35 = {
                    "done": v34,
                    "value": v30,
                };
                return o35;
            },
        };
        return o36;
    },
};
