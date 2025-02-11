function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v5,v5];
const v7 = [v5,v6,v3,v4,v6];
const v8 = [v4,v7,v3];
class C9 {
    static d = v4;
    get b() {
        v7.e = this;
        this | v8;
        class C12 {
            static #f;
            c = this;
            [v6] = v7;
            static 4;
        }
        new C12();
        const v14 = new C12();
        new C12();
        return v14;
    }
}
const v16 = new C9();
new C9();
const v18 = new C9();
function f22(a23, a24, a25) {
    'use strict';
    const v26 = new F0();
    a24[Symbol.match] = a24;
    return v26;
}
const v29 = f22(v18, v6, 512);
let v30;
try { v30 = v29.setUint32(-256, v29); } catch (e) {}
try { v30(v18, v6, v4, v16); } catch (e) {}
