function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -65536;
    this.e = -65536;
}
const v3 = new F0();
new F0();
new F0();
function f6() {
    return v3;
}
new Int16Array();
"arguments" instanceof Int32Array;
function f33(a34, a35) {
    const o36 = {
        "e": a34,
        __proto__: 65535,
        "a": a34,
        [a35]: a34,
    };
    return o36;
}
f33(-1, -1);
f33(-793786875, 11);
f33(-3, 512);
