function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 12074;
}
const v3 = new F0();
const v4 = new F0(F0, v3);
const v5 = new F0();
function f6() {
    return v3;
}
const v7 = [f6,v4];
[v7,v7,v4,v5];
[v3,v7,f6,v3];
const v13 = [16,443853635,3,47817,-65536,65536,-4294967295,1052658825,-1477830014];
const v14 = [-6,268435440,-10,710417484,9223372036854775807,-2147483648,-4294967297,-50249,33626,-9007199254740990];
const v15 = [388128452,-2147483647];
const v18 = new Uint16Array(2, Uint16Array, v14);
new Int32Array(5);
new Uint8Array(4);
v15[Symbol.f] = v13;
const v28 = Symbol.unscopables;
v13[v28] = v28;
typeof v13 > "undefined";
v14[v18];
