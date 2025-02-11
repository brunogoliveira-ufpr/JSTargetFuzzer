function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 2560;
}
const v14 = new F9("undefined", "growable", "growable");
new F9("undefined", "growable", "undefined");
const v16 = new F9("function", "function", "function");
const v20 = -4294967297 in v16;
let v21;
try { v21 = v20(-4294967297, 50362, v14); } catch (e) {}
[v21,v21];
const v24 = [9007199254740990,2560,v16,[v16,-4294967297],-9007199254740992];
for (let i26 = 0; i26 < 2; i26++) {
    new WeakMap();
    v24[WeakMap] = "function";
}
