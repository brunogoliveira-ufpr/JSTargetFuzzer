function f0() {
    const o12 = {
        [9007199254740991]: 9007199254740991,
        [-1000.0]: 524073640,
        [524073640]: 524073640,
        get a() {
            let v5;
            try { v5 = this(this, -1000.0, -1000.0, this, 524073640); } catch (e) {}
            const v7 = Symbol.toPrimitive;
            const o11 = {
                [v7]() {
                    let v8 = this;
                    let v9;
                    try { v9 = v5(); } catch (e) {}
                    v8 = v9;
                    v9.__proto__;
                    return -1000.0;
                },
            };
            return 9007199254740991;
        },
    };
    return o12;
}
const v13 = f0();
let v14 = f0();
const v15 = f0();
class C16 {
    65535 = f0;
    set b(a18) {
        this[this] = this;
        let v21 = 0.03318028330213718;
        ~-9007199254740991;
        Math.random();
        ++a18;
        Math.log10(v21);
        Math.cbrt(--v21);
    }
    static 1000;
    [v14] = v14;
}
new C16();
new C16();
const v30 = new C16();
const v33 = new Uint32Array(8);
const v36 = new BigUint64Array(128);
new Float32Array(7);
const v40 = new Float32Array(v33, 7, 128);
const v41 = delete v15[v40];
BigUint64Array[8] = 8;
v14 = v13;
v36[4] = v30;
const v42 = f0();
[] = v36;
Object.defineProperty(v40, 831, { get: f0, set: f0 });
f0(v41, v42, Uint32Array, 128, C16);
