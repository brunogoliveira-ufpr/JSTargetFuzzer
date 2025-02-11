function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9007199254740991;
}
const v3 = new F0();
new F0();
new F0();
new Int32Array(3);
new URIError(-128);
new Uint8ClampedArray(255, Uint8ClampedArray, v3);
const v18 = [16,1000,-2147483649];
const v19 = [64,9223372036854775807,-51574];
const v20 = [11,-61896,-1480701792,1000,32799,6,1000,1073741824,-9007199254740991];
[[v20,v18,v20,-9007199254740991],v20,v19,-4294967296];
[v18,v18,v19];
const v32 = new Float32Array(20, 20, 20);
let v33;
try { v33 = v32(); } catch (e) {}
v33 ** v33;
