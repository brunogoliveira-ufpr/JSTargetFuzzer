function f0() {
}
function f1() {
    const o4 = {
        [-1]: f0,
        valueOf() {
            const v3 = f1.__proto__;
            this[3] = f0;
            return v3;
        },
        __proto__: f0,
        "e": f0,
        "g": f0,
        "d": f0,
        "f": f0,
        "a": f0,
        4: f0,
        "b": f0,
    };
    return o4;
}
const v5 = f1();
f1();
const v7 = f1();
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 16;
    this.h = a16;
}
new F14(v5, 16, 357913273, 357913273);
new F14(v5, 16, v5, 16);
new F14(v7, 64, 357913273, 16);
const v23 = [16,443853635,3,47817,-65536,65536,-4294967295,1052658825,-1477830014];
const v24 = [-6,268435440,-10,710417484,9223372036854775807,-2147483648,-4294967297,-50249,33626,-9007199254740990];
const v25 = [388128452,-2147483647];
const v28 = new Uint16Array(2);
new Int32Array(5);
new Uint8Array(4);
v25[Symbol.isConcatSpreadable] = v23;
const v38 = Symbol.unscopables;
v23[v38] = v38;
typeof v23 === Uint16Array;
v24[v28];
