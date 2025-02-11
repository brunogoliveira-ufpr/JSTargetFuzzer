function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
}
new F1();
new F1();
new f0();
const v8 = new Float64Array(1024);
new Uint16Array(v8);
new Uint8ClampedArray(4096);
1.7976931348623157e+308 >>> "6125";
