function f0() {
    const o14 = {
        [0.3274023502013066](a5, a6) {
            try { this["valueOf"](a5, this, a5, "m"); } catch (e) {}
            return a6;
        },
        "e": 0.3274023502013066,
        valueOf(a10, a11) {
            try {
                super.valueOf();
            } catch(e13) {
            }
            return a10;
        },
    };
    return o14;
}
const v15 = f0();
const v16 = f0();
const v17 = f0();
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a24;
}
new F21(1000, v16);
new F21(1565495630, v17);
new F21(1000, v15);
Object.defineProperty(v16, -1, { writable: true, configurable: true, enumerable: true, value: f0 });
new Set();
function f30(a31) {
    return a31;
}
class C32 extends f30 {
    set a(a34) {
        f30(Float64Array);
    }
    static #d = v17;
}
