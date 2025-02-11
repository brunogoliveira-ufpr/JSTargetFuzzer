const v4 = new Int32Array();
v4.byteOffset;
function F6() {
    if (!new.target) { throw 'must be called with new'; }
}
256 << F6;
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "maxByteLength";
    this.e = a12;
}
new F10("getDate");
new F10("-22017");
new F10("maxByteLength");
new Uint32Array(1000);
new Uint8ClampedArray(16);
new Uint8ClampedArray(3895);
new Int16Array(998);
new Uint32Array(255);
const v33 = new Float64Array(3);
[3];
[Uint32Array,[v33,Int16Array,Int16Array,3,v33],998,998];
const t20 = 998;
t20[4] = ("bigint")["p"];
const o41 = {
};
new Proxy(Int16Array, o41);
const t27 = "MAX_SAFE_INTEGER";
t27.length &&= 512;
