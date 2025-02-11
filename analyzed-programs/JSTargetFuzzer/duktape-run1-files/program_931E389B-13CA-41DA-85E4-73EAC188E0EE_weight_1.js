const v2 = new Int32Array(10);
new Float64Array(5);
new BigInt64Array(255);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a14;
    this.d = 5;
    this.a = 255;
}
new F9(10, 5, 255, 10);
new F9(10, 255, 5, 5);
const v17 = new F9(10, 10, 255, 5);
v2[Symbol.match] = v17;
delete v2[BigInt64Array];
v2[Symbol.toPrimitive];
new Uint16Array(128);
new Int32Array(123);
new BigInt64Array(80);
