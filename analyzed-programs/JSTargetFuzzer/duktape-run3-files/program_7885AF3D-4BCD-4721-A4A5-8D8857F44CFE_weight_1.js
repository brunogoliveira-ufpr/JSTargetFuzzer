let v2 = 12;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
    this.f = v2;
    this.b = v2;
}
const v6 = new F3(v2);
const v7 = new F3(8);
const v8 = new F3(4294967296);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a11;
}
v8.__proto__;
v2 /= 8;
const v15 = F9 || F9;
v6[Symbol.search] = F9;
const v18 = new F9(v6, 4294967296, v7);
new F9(v8, v18, v7);
const v20 = new F9(v6, v7, v8);
function f33(a34, a35) {
    const o36 = {
        "e": a34,
        __proto__: 65535,
        "a": a34,
        [a35]: a34,
    };
    return o36;
}
new v15(65535, v15, 11);
-3 < v6;
v18.c = f33;
v6[227];
try { v20.valueOf(); } catch (e) {}
f33(-1, -1);
f33(-793786875, 11);
f33(-3, 512);
