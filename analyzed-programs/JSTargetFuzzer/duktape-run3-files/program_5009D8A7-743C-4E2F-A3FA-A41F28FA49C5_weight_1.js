const v2 = new Int8Array(257, Int8Array);
const v5 = new Float64Array(10);
const v8 = new TypeError(2852, Float64Array, v5);
const v9 = [10,v8];
const v10 = [Float64Array,v2,2852,v9];
const v11 = [Float64Array,10,v8,v10];
const v12 = new TypeError(v11);
v12 instanceof TypeError;
new Int16Array(10);
const v22 = new Float64Array(6);
const v25 = new Int32Array(4096);
const v30 = [Int16Array,v25,v22];
const v31 = [Int32Array,65537,v25,6];
const v32 = [Int16Array,1885445262,v31,v22,v9];
let v33 = 10;
for (; v33--;) {
    const v35 = v9[0.0];
    try { v10.toLocaleString(v9, v30); } catch (e) {}
    function F37(a39, a40) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = v5;
        this.h = TypeError;
        this.e = v35;
    }
    new F37(v11, v9);
    new F37(v30, v9);
    new F37(v35, v31);
    [true,1885445262,v32];
}
