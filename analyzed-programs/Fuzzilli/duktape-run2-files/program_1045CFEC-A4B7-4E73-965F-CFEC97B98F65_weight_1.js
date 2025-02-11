class C3 {
    constructor(a5) {
        this.__proto__ = this;
        const v6 = this[this];
        v6.valueOf = v6;
    }
    static {
        const v11 = super.c;
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = this;
            this.a = v11;
        }
        new F12(127, -65537);
        new F12(-4, -4);
        new F12(-4, -4);
    }
}
const v19 = new C3(-4);
const v20 = new C3(127);
const v21 = new C3(127);
let v24 = "symbol";
function f25(a26, a27) {
    const o33 = {
        get d() {
            let v29 = 0;
            do {
                v24 = v20;
                v29++;
            } while (v29 < 0)
            return -4;
        },
        "c": v24,
        ...a26,
    };
    return o33;
}
const v34 = f25(C3, 127);
const v35 = f25(v34, "throw");
const v36 = f25(v21, "Bqt");
const v37 = [v21,127,v19,f25];
[v37,[v36,C3,v36],v34];
class C40 {
    n(a42, a43, a44) {
        [C3,v35,[f25,v20,v35,a43,a42],v20];
        ["throw","Bqt",a43,v37,-65537];
        return "Bqt";
    }
}
new C40();
new C40();
new C40();
