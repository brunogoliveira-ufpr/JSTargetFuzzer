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
const o35 = {
    [9223372036854775807]: 2147483648,
};
const v36 = new Float64Array(3);
[3];
[Uint32Array,[v36,Int16Array,Int16Array,3,v36],998,998];
const t23 = 998;
t23[4] = ("bigint")["p"];
const o44 = {
};
new Proxy(Int16Array, o44);
const t30 = "MAX_SAFE_INTEGER";
t30.length &&= 512;
