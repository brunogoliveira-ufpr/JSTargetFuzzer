function f0() {
    const o10 = {
        __proto__: "n",
        ["5"]: "5",
        ..."n",
        "e": "n",
        ["5"](a5, a6) {
            const o9 = {
                valueOf() {
                    ("n").__proto__;
                    return "5";
                },
            };
            return "5";
        },
        "b": "n",
        ["n"]: 0.8959753385443847,
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
class C14 {
    static #a;
    static {
        const v16 = v12;
        this.__proto__ = v12;
        try {
            this.#a;
        } catch(e18) {
        }
    }
    constructor(a20) {
        const o21 = {
            "a": this,
        };
        try {
            super.flatMap(v11, v11, this, this, parseInt);
        } catch(e24) {
        }
    }
}
const v25 = new C14(v13);
const v26 = new C14(v13);
const v27 = new C14(v12);
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a33;
    this.h = v25;
}
const v34 = new F28(F28, v25, v26, v12);
const v35 = new F28(v34, v12, v11, v13);
new F28(v26, v12, v34, v13);
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a39;
}
new F37(v26, v13);
const v42 = new F37(v34, v27);
new F37(v35, v12);
if (f0 < v42) {
} else {
    const o50 = {
        "maxByteLength": 573999004,
    };
    const v52 = new ArrayBuffer(16, o50);
    new Int32Array(v52);
}
