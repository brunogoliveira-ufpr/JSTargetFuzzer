function f0() {
}
class C1 extends f0 {
    m() {
        let v2 = this;
        ({"b":f0,"d":v2,"e":v2,...v2} = v2);
        f0.__proto__;
        f0.valueOf = f0;
        f0[39] = f0;
        const v5 = Symbol.iterator;
        const o14 = {
            [v5]() {
                let v7 = 10;
                const o13 = {
                    next() {
                        v7--;
                        const v11 = v7 == 0;
                        const o12 = {
                            "done": v11,
                            "value": v7,
                        };
                        return o12;
                    },
                };
                return o13;
            },
        };
        return v2;
    }
}
const v15 = new C1();
const v16 = new C1();
const v17 = new C1();
const v18 = [v16];
const v20 = [v15,[v15,v18],v15];
function f21(a22, a23) {
    const o37 = {
        set e(a25) {
            const o26 = {
            };
            new Proxy(this, o26);
            a23 = a25;
        },
        "c": v16,
        3043517102: C1,
        n(a30, a31, a32, a33) {
            new Array(7);
            return v16;
        },
    };
    return o37;
}
f21(v17, v20);
f21(v16, v20);
f21(v15, v18);
class C41 extends f21 {
    #c;
    get d() {
        return "10";
    }
    #d = C1;
    static 6 = v16;
    #a;
    1024;
}
new C41();
const v50 = new C41();
new C41();
let v53 = 9;
v53 % 0.5357742104179988;
Math.random();
v53--;
v50.__proto__;
[-1000000000.0,-2.5338454897358425e+307,-2.220446049250313e-16,2.220446049250313e-16,2.2250738585072014e-308,-408.8469224257833,-260049.45862268133,828.9689943225044,2.0458883728687667];
[-1.240530291510143e+307];
[-8.647517703800215,0.0,1.4631662342956613,-9.661759176646454];
