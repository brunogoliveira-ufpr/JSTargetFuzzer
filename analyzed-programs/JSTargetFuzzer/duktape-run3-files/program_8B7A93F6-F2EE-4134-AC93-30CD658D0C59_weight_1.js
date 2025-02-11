function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -15;
    this.b = -15;
    this.d = -15;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v10 = new WeakMap();
let v14;
try { v14 = v3.get(); } catch (e) {}
{
    let v15;
    try { v15 = v3.p(v14, WeakMap, 6912n); } catch (e) {}
    -9007199254740991 >= v15 ? -9007199254740991 : v15;
}
v3[WeakMap] = v10;
try { v5["preventExtensions"](v4); } catch (e) {}
try { ("preventExtensions").padStart(-1124284484, v14); } catch (e) {}
