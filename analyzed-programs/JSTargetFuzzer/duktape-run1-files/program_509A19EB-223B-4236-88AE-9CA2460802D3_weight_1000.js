function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -14;
    this.f = 5;
    this.c = -14;
}
const v6 = new F3(-14);
const v7 = new F3(6);
const v8 = new F3(5);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a17;
    this.d = -14;
    this.h = a15;
}
new F12(v8, v7, 2528, v7);
const v19 = new F12(v8, v8, 2528, v8);
const v20 = new F12(v7, v8, 129, v7);
Object.defineProperty(v6, 268435456, { configurable: true, value: v8 });
v19[v20] >>>= 5;
v7[Symbol.split];
