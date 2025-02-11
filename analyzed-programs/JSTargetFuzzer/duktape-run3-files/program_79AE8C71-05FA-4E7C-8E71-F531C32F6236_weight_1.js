function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 13;
    this.c = 13;
    this.d = 13;
}
new F0();
new F0();
const v5 = new F0();
const v12 = [v5,10000n,"max"];
const v13 = [53916n,v12,"a",53916n,F0];
Object.defineProperty("a", 4096, { writable: true, configurable: true, enumerable: true, value: [v13,v13] });
const v15 = v5.constructor;
class C16 extends v15 {
    static [F0] = F0;
    static h;
    9 = v12;
}
new C16();
try { v15(v5, "a", 8n, v13); } catch (e) {}
