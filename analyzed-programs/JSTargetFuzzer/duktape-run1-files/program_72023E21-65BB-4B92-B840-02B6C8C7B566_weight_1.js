function f0() {
    const o22 = {
        "c": "symbol",
        m(a5, a6) {
            let v7;
            try { v7 = a5(a6, 863152.6167438317); } catch (e) {}
            super.d = v7;
            const t7 = "m";
            t7.e = v7;
            this.__proto__ = this;
            return a6;
        },
        ..."m",
        set f(a9) {
            const t14 = "symbol";
            t14[a9] = 863152.6167438317;
            a9.__proto__ = "symbol";
            super.a;
            const v12 = Symbol.toPrimitive;
            const o21 = {
                [v12]() {
                    function F14(a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.a = a16;
                        this.f = this;
                    }
                    new F14(F14, a9);
                    new F14("m", this);
                    new F14("m", a9);
                    return "m";
                },
            };
        },
    };
    return o22;
}
const v23 = f0();
const v24 = f0();
const v25 = f0();
function f26(a27, a28) {
    const o48 = {
        __proto__: v25,
        "d": f0,
        [v23](a30, a31, a32, a33) {
            return v25;
        },
        set f(a38) {
            const v39 = a28[65536];
            function F40(a42, a43, a44) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = a27;
                this.f = a44;
            }
            new F40(a28, v25, a38);
            new F40(a28, v24, a28);
            new F40(v23, f0, v39);
        },
    };
    return o48;
}
const v49 = f26(v24, v25);
const v50 = f26(v49, v23);
const v51 = f26(f0, v24);
function F55(a57, a58, a59) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a58;
    this.g = a58;
    this.b = a59;
}
new F55(v51, f26, 1.4884794303777531e+307);
new F55(v49, v25, f0);
new F55(v50, v24, v25);
[-Infinity,0.27570908527116744,6.440745979994353e+307,577.675497980443,611019.343119808,1.7976931348623157e+308,9.450163995195059,-435.75576063399285,0.5420599902383781];
const v64 = [0.7816973774131958,1.7976931348623157e+308,237019.45462901937,-1000.0,-4.652263222281762,304619.4276797683,3.5176710382871903,1e-15];
[-421.84490504424923,-367.9368960961798,2.220446049250313e-16,3.0,-5.0,-4.986942969516734,-1e-15];
function f66(a67) {
    return a67;
}
class C68 extends f66 {
    static 797793191;
    static [v25];
    static a;
    static 8 = v64;
    130;
}
