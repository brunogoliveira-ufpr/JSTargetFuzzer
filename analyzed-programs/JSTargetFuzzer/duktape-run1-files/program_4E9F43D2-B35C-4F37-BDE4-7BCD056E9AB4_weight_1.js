class C3 {
    static [1000000000.0];
    g = -1000.0;
    constructor(a5, a6) {
        const v8 = Symbol.toPrimitive;
        const o11 = {
            [v8]() {
                Object.defineProperty(v8, 14, { writable: true, configurable: true, enumerable: true, value: 14 });
                let [v10] = a6;
                return 14;
            },
        };
    }
    e = -1000.0;
    static 4 = 14;
}
const v12 = new C3(1000000000.0, C3);
const v13 = new C3(v12, v12);
const v14 = new C3(C3, v13);
new Int32Array(2205);
new Uint8Array(256);
new Uint8Array(739);
(v14 + 739) == C3;
function F29(a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 490.64443039012576;
    this.b = Int32Array;
    this.a = 278926.0143195812;
}
new F29(278926.0143195812, 14, 2205);
new F29(278926.0143195812, 14, 256);
new F29(-1.7976931348623157e+308, 739, 2205);
