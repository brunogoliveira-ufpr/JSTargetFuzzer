function f0() {
    const o20 = {
        [-4.0]: -3.0,
        [-4.0](a5) {
            for (let i8 = 0, i9 = 10; i8 < i9; i8++, i9--) {
                a5.h &= a5;
            }
            return -3.0;
        },
    };
    return o20;
}
const v21 = f0();
const v22 = f0();
const v23 = f0();
class C24 extends f0 {
    #toString(a26, a27) {
        const v29 = Symbol.iterator;
        const o38 = {
            [v29]() {
                let v31 = 10;
                const o37 = {
                    next() {
                        v31--;
                        const v35 = v31 == 0;
                        const o36 = {
                            "done": v35,
                            "value": v31,
                        };
                        return o36;
                    },
                };
                return o37;
            },
        };
        return o38;
    }
}
new C24();
const v40 = new C24();
new C24();
let v47 = 6;
C24.__proto__ = v21;
v40 - v47;
let v53;
try { v53 = v21["for"](9007199254740991, v47, v22, v23); } catch (e) {}
v47 = -1825642942;
try { v53.toString(); } catch (e) {}
