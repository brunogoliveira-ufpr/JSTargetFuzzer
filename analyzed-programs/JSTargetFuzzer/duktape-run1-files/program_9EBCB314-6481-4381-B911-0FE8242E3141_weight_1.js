function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 11;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
function f6() {
    return v3;
}
function f7(a8, a9) {
    const o23 = {
        [a8](a11, a12) {
            for (const v13 of a11) {
                v4 |= v13;
                a9[129] %= a11;
            }
            new Int32Array(3989);
            new Float64Array(1);
            new Uint16Array(4);
            return a8;
        },
    };
    return o23;
}
const v25 = f7(v5, f7(v5, v3));
f7(v4, v5);
const v30 = v3[2];
Object.defineProperty(v25, "b", { configurable: true, get: f6 });
v30[Symbol.unscopables] = v30;
Object.defineProperty(v5, -1, { writable: true, configurable: true, enumerable: true, get: f6 });
try { v5.isFinite(32050, v4, v5, v5, F0); } catch (e) {}
