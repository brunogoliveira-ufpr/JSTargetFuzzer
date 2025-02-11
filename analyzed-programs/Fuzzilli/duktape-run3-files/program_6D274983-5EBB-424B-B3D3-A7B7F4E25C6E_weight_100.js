function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v1 = this;
    v1.a = 64;
    v1.d = 64;
    v1.f = 64;
    v1.d = v1;
    v1 %= v1;
}
new F0();
new F0();
const v8 = new F0();
const v9 = [0.3102900647214981,0.0,3.429431976949278,8.263743289003973,-0.0,-1e-15,4.0,4.0];
const v10 = [-521649.01512616413,-1000000000.0,-3.0];
const v11 = [-1000000.0,-784580.9976880631,-0.8409756171901979,1000.0,-1000.0,9.000223472336757e+307,-1.7976931348623157e+308,3.0,-1000.0];
function f12() {
    return v10;
}
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a16;
    this.c = a15;
}
const v19 = new F13(v8, v9, v11, v10);
const v20 = new F13(v19, v11, v9, v11);
v10[Symbol.search] = v20;
new F13(v9, v9, v10, v10);
new Int8Array(F13);
new Float64Array(3329);
new Int16Array(5);
const v38 = new Int16Array(1024);
new Uint32Array(10);
new Int16Array(Int16Array);
const v45 = -9007199254740990 * -2147483649;
function F46(a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
}
const v52 = new Float32Array(1683);
const v55 = ("g")[1480];
const o56 = {
    [v45]: v55,
};
function F57(a59, a60, a61) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v63 in Date) {
        const o64 = {
        };
        new Proxy(f12, o64);
        this[a61];
    }
    const o68 = {
    };
    Uint32Array.h = Float32Array;
    this.d = v38;
}
new F57(1024, 1024, 10);
new F57(v52, 1024, F57);
new F57(Int16Array, 10, 1683);
const v73 = new Float64Array(Float64Array, Float64Array, Float64Array);
try { v73["n"](); } catch (e) {}
for (const v76 in F0) {
}
