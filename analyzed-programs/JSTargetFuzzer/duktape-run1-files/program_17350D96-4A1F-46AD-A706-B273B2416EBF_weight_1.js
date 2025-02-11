function f0() {
    const o8 = {
        ...63083,
        [-4.0]: -4.0,
        2147483647: -4.0,
        1652: 63083,
        "g": 63083,
        ...-4.0,
        m(a5) {
            -a5;
            function f7() {
                return -4.0;
            }
            return 63083;
        },
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
f0();
class C12 {
    static 2;
    static 4294967295;
    static #c;
    m(a14) {
        try {
            this.#c = v9;
        } catch(e15) {
        }
        const o18 = {
            "maxByteLength": 65535,
        };
        const v20 = new SharedArrayBuffer(3907, o18);
        const v22 = new BigInt64Array(v20);
        return v22;
    }
}
new C12();
const v24 = new C12();
const v25 = new C12();
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a30;
    this.c = a31;
}
new F26(C12, v9, v25, v24);
const v33 = new F26(v10, f0, v10, v25);
new F26(v9, v33, v9, F26);
new Uint16Array(129);
new Uint8ClampedArray(129);
new BigUint64Array(252);
