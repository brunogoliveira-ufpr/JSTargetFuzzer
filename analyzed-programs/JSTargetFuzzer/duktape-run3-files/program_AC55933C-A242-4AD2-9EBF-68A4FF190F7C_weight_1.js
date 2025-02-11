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
v6.length = 1;
const v10 = v6 >= F3;
let v11 = v10 ? v6 : F3;
try { v11(v10, v10); } catch (e) {}
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a15;
}
v8.__proto__;
v2 /= 8;
const v19 = F13 || F13;
v6[Symbol.search] = F13;
const v22 = new F13(v6, 4294967296, v7);
new F13(v8, v22, v7);
const v24 = new F13(v6, v7, v8);
let v35 = 512;
function f37(a38, a39) {
    const o40 = {
        "e": a38,
        __proto__: 65535,
        "a": a38,
        [a39]: a38,
    };
    return o40;
}
new v19(65535, v19, 11);
-3 < v6;
v22.c = f37;
v6[227];
try { v24.valueOf(); } catch (e) {}
Object.defineProperty(v6, "a", { set: Symbol });
v11 = F13;
v35 = -3;
f37(-1, -1);
f37(-793786875, 11);
f37(-3, v35);
