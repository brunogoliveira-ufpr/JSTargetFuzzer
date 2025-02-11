class C3 {
    get g() {
        let v5;
        try {
        const t0 = 512;
        v5 = new t0();
        } catch (e) {}
        const v6 = v5?.c;
        v6.__proto__;
        return v6;
    }
    static #c;
    static #g;
    #p(a9, a10) {
        const o14 = {
        };
        new Proxy(a9, o14);
        return -815875265;
    }
}
const v17 = new C3();
const v18 = new C3();
new C3();
function f21() {
    return 512;
}
class C22 {
    #p(a24, a25, a26, a27) {
        try {
            super.map(true, 512, a25, -2.2250738585072014e-308, v18);
        } catch(e29) {
        }
        return v17;
    }
    #d;
    set g(a31) {
        try {
            super.p(this);
        } catch(e33) {
        }
    }
}
new C22();
new C22();
const v36 = new C22();
v36 == C3;
class C38 {
    static [512];
    static #c = C22;
}
new C38();
new C38();
new C38();
for (let v42 = 0; v42 < 32; v42++) {
    v17["p" + v42] = v42;
}
