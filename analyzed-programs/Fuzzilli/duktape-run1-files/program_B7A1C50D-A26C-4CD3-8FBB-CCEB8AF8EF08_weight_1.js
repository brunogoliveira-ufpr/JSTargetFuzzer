function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    constructor(a8) {
        super();
        const o9 = {
        };
        new Proxy(a8, o9);
    }
    126;
    n(a13, a14) {
        let v15;
        try { v15 = a14(v5); } catch (e) {}
        v4[v3.__proto__] *= v15;
        const v18 = v15.__proto__;
        a14 >>= v18;
        v15 = F0;
        return v18;
    }
}
const v19 = new C6(v5);
new C6(v19);
const v21 = new C6(v5);
function f22() {
    return v21;
}
try { v3.getInt16(); } catch (e) {}
function* f30(a31, a32, a33, a34) {
    'use strict';
    a33 %= a33;
    v3.g += a33;
    a32.__proto__;
    C6 > -776385.1441480492;
    const v38 = Symbol.iterator;
    const o47 = {
        [v38]() {
            let v40 = 10;
            const o46 = {
                next() {
                    v40--;
                    const v44 = v40 == 0;
                    const o45 = {
                        "done": v44,
                        "value": v40,
                    };
                    return o45;
                },
            };
            return o46;
        },
    };
    yield a32;
    return a33;
}
f30(-7.565082838207513e+307, v19, v21, -7.565082838207513e+307);
