-Infinity;
class C3 {
    constructor(a5) {
        let v6;
        try { v6 = this.UTC(9007199254740990); } catch (e) {}
        let v8;
        try { v8 = this["valueOf"](v6, v6); } catch (e) {}
        function f9(a10, a11, a12, a13) {
            a10 = v6;
            function F15(a17, a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = arguments;
                this.h = a20;
                this.f = a17;
            }
            const v21 = new F15(v8, this, v6, a5);
            const v22 = new F15(F15, a10, v21, a13);
            const v23 = new F15(v22, v22, v8, v22);
            return v23;
        }
        f9(-128, this, f9, this);
    }
}
const v25 = new C3(-128);
const v26 = new C3(C3);
const v27 = new C3(v26);
const v30 = new Uint16Array(6);
let v31 = 129;
const v33 = new Int8Array(v31);
const v36 = new BigInt64Array(4096);
C3[2] = v27;
const v40 = v36[typeof v26 === "function"];
v40[BigInt64Array] = v40;
C3.d = v25;
v33.__proto__ = v25;
v30[Uint16Array] = v40;
v31 = 9007199254740990;
