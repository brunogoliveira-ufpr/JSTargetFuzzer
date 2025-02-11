function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
}
const v6 = new F3(-16);
const v7 = new F3(-22970);
const v8 = new F3(-22970);
new Array(186);
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 186;
}
new F15(186, v8, v7);
new F15(-16, v6, v6);
const v22 = new F15(-4294967295, v7, v7);
const o23 = {
    "call": Array,
    "construct": Array,
    "defineProperty": Array,
    "getOwnPropertyDescriptor": Array,
    "getPrototypeOf": Array,
    "has": Array,
    "preventExtensions": Array,
    "set": Array,
};
new Proxy(v22, o23);
