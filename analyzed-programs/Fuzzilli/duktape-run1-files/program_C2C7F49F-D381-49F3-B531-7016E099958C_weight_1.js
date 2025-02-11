function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6() {
    return v4;
}
function f10() {
    return 7n;
}
new Array(512);
new Uint16Array(233);
const v19 = new BigInt64Array(1);
const v22 = new Int8Array(8);
Object.defineProperty(v19, 268435439, { configurable: true, enumerable: true, get: f0 });
~v3;
var h = v3;
if (-7191n != F1) {
    Object.defineProperty(v22, "b", { set: f0 });
    new f6();
} else {
    Object.defineProperty(v19, 41192n, { writable: true, configurable: true, set: Array });
    function F26(a28, a29) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = v5;
        this.f = v4;
        this.b = a28;
    }
    new F26(7n, 512);
    new F26(7n, 8);
    new F26(41192n, 8);
}
