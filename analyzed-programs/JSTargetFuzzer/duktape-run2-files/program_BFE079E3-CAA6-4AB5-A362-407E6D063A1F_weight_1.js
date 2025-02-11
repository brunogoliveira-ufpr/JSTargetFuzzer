function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -4294967295;
    this.d = -4294967295;
}
const v3 = new F0();
const v4 = new F0();
new F0();
let v10 = 536870889;
let v14 = 501.7363974610673;
v14 = -938.2272221051526;
let v18;
try { v18 = v4.m(-938.2272221051526, -128, 125406853, 16, v3); } catch (e) {}
v10 = v18;
let [v19] = v18;
v19.h = v14;
try { v19(v14); } catch (e) {}
v3.d;
v3.b;
new Int32Array(3);
new BigInt64Array(10);
new Uint8ClampedArray(3104);
