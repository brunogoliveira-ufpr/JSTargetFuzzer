const v2 = new BigUint64Array(3);
const v5 = new Uint16Array(5);
const v8 = new BigUint64Array(1);
let v12;
try { v12 = v5.findIndex(5, v2); } catch (e) {}
new Uint16Array(v5, 1);
const o14 = {
    "b": Uint16Array,
    [BigUint64Array]: Uint16Array,
    "f": v8,
};
let v15;
try { v15 = v12(3, 512, BigUint64Array); } catch (e) {}
o14.valueOf = v15;
v12 < v5;
