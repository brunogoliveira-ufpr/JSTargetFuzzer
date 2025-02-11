function f1() {
    const o10 = {
        "g": undefined,
        "h": undefined,
        [undefined]: undefined,
        get f() {
            this[this] = this;
            [,this,this];
            return [,[this,,]];
        },
        m() {
            super.g;
            this.__proto__;
            return super.h;
        },
    };
    return o10;
}
const v11 = f1();
const v12 = f1();
const v13 = f1();
function f14(a15, a16) {
    const o26 = {
        __proto__: a15,
        [v13](a18, a19, a20) {
            super.c = a20;
            a16[14] &&= a16;
            try {
                super.setPrototypeOf(a15, f1, a18);
            } catch(e25) {
            }
            return this;
        },
        [a15]: a16,
        "h": v13,
    };
    return o26;
}
const v27 = f14(v13, v12);
f14(v12, v12);
const v29 = f14(v12, v13);
const v33 = [v11];
const v34 = [1570987388,1570987388,v29,v33,v33];
const v35 = [v27,v29,v34,,];
new WeakSet();
const v38 = v12[8];
let v39;
try { v39 = v38(v11, v35, v13, 1570987388); } catch (e) {}
v12 | v39;
v12[Symbol.isConcatSpreadable] = 1570987388;
v34.length;
v34[4294967296];
