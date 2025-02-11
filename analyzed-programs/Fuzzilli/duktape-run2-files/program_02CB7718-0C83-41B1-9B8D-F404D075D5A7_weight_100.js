function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    let v3 = 0;
    const v4 = v3++;
    (v4 / -4294967296) - v4;
    this.e = f0;
}
const v8 = new F1();
new F1();
new f0();
const v13 = new Float64Array(1024);
new Uint16Array(v13);
new Uint8ClampedArray(Uint16Array);
1.7976931348623157e+308 >>> v8;
