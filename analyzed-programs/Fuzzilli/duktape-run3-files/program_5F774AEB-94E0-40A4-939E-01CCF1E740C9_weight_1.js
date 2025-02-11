function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -13;
    this.h = -13;
    this.g = -13;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v3.h %= -1024;
const v12 = v5[-48024];
try { v12(); } catch (e) {}
Object.defineProperty(v3, -2, { writable: true, configurable: true, value: 268435441n });
v5 % 1449998945n;
let v15 = 0;
do {
    const v16 = new F0();
    try { v16.toString(v16, 1449998945n, v4, v15, v16); } catch (e) {}
    v15++;
} while (v15 < 10)
