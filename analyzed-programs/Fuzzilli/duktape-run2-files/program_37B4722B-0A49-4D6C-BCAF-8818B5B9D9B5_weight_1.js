function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -57581;
    this.g = -57581;
    this.b = -57581;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [285.9265892464666];
const v7 = [-2.220446049250313e-16,-1.7976931348623157e+308,-1.9386418096003516e+307,2.0,1000000000.0,0.0,-1.7976931348623157e+308,8.16321002024453,1000000000000.0,882088.2508812938];
const v8 = [-2.220446049250313e-16,Infinity,-3.4601828254170566e+307,1000.0,0.603925177562003];
function f9(a10, a11, a12, a13) {
    const o18 = {
        "h": a11,
        [a10]: v4,
        set c(a15) {
            a15.d = v7;
            v5.valueOf = a15;
            super.a = v3;
            a11 + delete a10?.length;
        },
        [v6]: v7,
        [a12]: v4,
    };
    return o18;
}
f9(v8, v4, v5, v4);
f9(v8, v5, v5, v4);
f9(v6, v5, v3, v4);
new Int16Array(9);
new Int32Array(16);
new Int16Array(2289);
v8[v5];
