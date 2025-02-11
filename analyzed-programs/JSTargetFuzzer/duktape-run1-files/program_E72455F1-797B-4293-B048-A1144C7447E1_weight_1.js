function f6() {
    return 1073741824;
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a13;
    this.c = a13;
}
let v14 = new F10(268435441, "getOwnPropertyDescriptor");
const v15 = new F10(256, 256);
const v16 = new F10(256, v15);
v14 = v16;
Object.defineProperty(v16, "b", { writable: true, set: f6 });
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a21;
}
new F17("M", 268435441, 256, "getOwnPropertyDescriptor");
new F17(F10, 656874056, -10, 1073741824);
const v25 = new F17("E", 268435441, 268435441, -32030);
v25[F10];
v14[6];
