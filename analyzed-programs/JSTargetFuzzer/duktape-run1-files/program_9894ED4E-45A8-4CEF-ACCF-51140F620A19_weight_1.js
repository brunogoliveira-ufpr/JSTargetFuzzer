class C3 {
    #c;
    constructor(a5, a6) {
        let v7;
        try { v7 = a5(6, this, this, 9007199254740991, 256); } catch (e) {}
        let v9;
        try { v9 = this["forEach"](); } catch (e) {}
        v9[5] = v7;
    }
    static [6] = 6;
    m(a11, a12) {
        if (a12) {
            super.a &&= a12;
        } else {
            try { this["push"](a11); } catch (e) {}
        }
        return 256;
    }
}
new C3(256, 9007199254740991);
new C3(9007199254740991, 6);
let v17 = new C3(6, 256);
const v20 = new Float32Array(64);
const v23 = new Int16Array(3468);
const v26 = new Uint8Array(9);
delete v26[6];
let v28 = 0;
while (v28 < 5) {
    v17.toString = v23;
    v26[9] = 6;
    v17 = C3;
    v20[9007199254740991] = v28;
    v28++;
}
