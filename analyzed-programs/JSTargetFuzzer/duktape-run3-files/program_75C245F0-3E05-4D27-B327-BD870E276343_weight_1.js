const v1 = new WeakMap();
class C5 extends WeakMap {
    m(a7) {
        const v8 = new WeakMap(v1);
        return v8[v1];
    }
    #n(a11) {
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = -1073741824;
        }
        const v16 = new F12(a11, F12);
        new F12(a11, this);
        new F12(1987, v1);
        return v16;
    }
}
const v19 = new C5();
const v20 = new C5();
let v21 = new C5();
typeof v19 === "boolean";
v21 /= v20;
v1.__proto__;
with ("boolean") {
    length = v21;
    v21 = -13;
    const o27 = {
    };
    new Proxy("boolean", o27);
}
