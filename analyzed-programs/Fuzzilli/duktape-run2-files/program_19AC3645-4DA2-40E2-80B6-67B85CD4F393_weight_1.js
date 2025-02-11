function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 512;
    this.e = 512;
}
new F0();
new F0();
new F0();
const v8 = new Array(210);
function f9() {
    return v8;
}
const o13 = {
    "apply": f9,
    "call": f9,
    "defineProperty": Array,
    "deleteProperty": Array,
    "has": f9,
    "isExtensible": f9,
    "preventExtensions": f9,
};
new Proxy(Array, o13);
