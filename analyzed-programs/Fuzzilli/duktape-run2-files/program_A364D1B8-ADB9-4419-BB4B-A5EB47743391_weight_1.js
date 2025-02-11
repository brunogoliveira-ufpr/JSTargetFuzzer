function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
    this.b = a6;
    this.d = a6;
}
new F3(4294967297, 9007199254740990);
const v8 = new F3(9007199254740990, 4294967296);
new F3(9007199254740990, 4294967297);
new Uint16Array(70);
new Uint16Array(12);
const v18 = new Int8Array(6);
const o22 = {
    valueOf() {
        try { this["reverse"](70, "reverse", this); } catch (e) {}
        return 4294967296;
    },
};
let v23;
try { v23 = v8.n(v8); } catch (e) {}
v18[Int8Array] |= v23;
function f24() {
    return 4294967296;
}
