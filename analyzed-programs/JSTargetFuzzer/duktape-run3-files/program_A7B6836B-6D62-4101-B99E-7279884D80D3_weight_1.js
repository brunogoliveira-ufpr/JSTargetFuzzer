class C3 {
    get g() {
        this.b = this;
        function f5(a6, a7, a8) {
            try { new a8("h", a7, a6, this); } catch (e) {}
            return arguments;
        }
        f5();
        return this;
    }
    static ["h"];
    static 3 = 128;
    static #d = 128;
    g;
}
const v12 = new C3();
const v13 = new C3();
let v14 = new C3();
function f15(a16, a17, a18) {
    const o46 = {
        "g": 128,
        "f": v12,
        [a16](a20, a21, a22, a23) {
            let v19 = this;
            ({"g":v19,...v14} = v12);
            a20[v19];
            super.d = a18;
            return a18;
        },
        p(a26, a27, a28, a29) {
            function F30(a32, a33, a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a16;
            }
            new F30(a26, a18, v13, a16);
            new F30(a28, a26, a27, v13);
            new F30(v13, a26, a27, this);
            let v42 = +a18;
            a18 | -9223372036854775807;
            return Math.imul(4294967296, --v42);
        },
    };
    return o46;
}
const v47 = f15(f15, C3, v14);
const v48 = f15(128, v14, v47);
f15("g", v12, C3);
["h",C3];
const v51 = [v14];
[v51,v51,v48];
v13.__proto__ = v47;
const o58 = {
    "maxByteLength": 109,
};
const v60 = new ArrayBuffer(109, o58);
new Float32Array(v60);
