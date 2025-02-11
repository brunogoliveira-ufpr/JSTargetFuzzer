function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2147483647;
    this.f = 2147483647;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v5,v5];
const v7 = [v3,v5,F0,v5];
const v8 = [v3,v6,v3];
new Int32Array(129);
const v14 = new Float64Array(1024);
const v17 = new Int32Array(2622);
const v18 = v14[v17];
const o19 = {
    "g": v5,
    4294967295: F0,
};
v8 + v18;
Int32Array >> v7;
v4.f = 2622;
Object.defineProperty(v8, 3, { writable: true, value: v14 });
v17.toString = v18;
