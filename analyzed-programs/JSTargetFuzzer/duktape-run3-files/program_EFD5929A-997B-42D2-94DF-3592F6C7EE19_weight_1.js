function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 127;
    this.g = 127;
    this.c = 127;
}
new F0();
new F0();
const v5 = new F0();
function f9() {
    return 65535;
}
class C10 extends F0 {
    e = f9;
    static #b = F0;
    constructor(a12, a13, a14, a15) {
        super();
        const o18 = {
            "maxByteLength": 232,
        };
        const v20 = new SharedArrayBuffer(55, o18);
        new Float64Array(v20);
    }
}
const v23 = new C10(29620202, v5, 29620202, 65535);
const v24 = new C10(-1477631951, v23, 29620202, -1477631951);
const v25 = new C10(29620202, v24, 29620202, v23);
Object.defineProperty(v25, 2147483648, { value: v25 });
delete v24?.g;
v5.__proto__ = v24;
class C28 extends v5.constructor {
    3662887924 = F0;
    [65535];
    g = 29620202;
}
new C28();
