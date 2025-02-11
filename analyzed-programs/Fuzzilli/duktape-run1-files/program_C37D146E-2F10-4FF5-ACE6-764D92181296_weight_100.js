function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 5;
    this.h = 5;
}
new F0();
const v4 = new F0();
const v5 = new F0();
{
    new Int8Array(3971);
    new Int8Array(7);
    new Float32Array(7);
}
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a24;
    this.h = a23;
}
new F21(1060094878, -4294967295);
new F21(1060094878, v4);
new F21(-4294967295, v5);
([101682.02358200424,-1000000000000.0,0.14075246577388523,2.2250738585072014e-308,1000000000.0]).length;
[];
