function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.b = "number";
    this.a = a5;
}
new F3("-1024");
const v7 = new F3("-1024");
const v8 = new F3("7");
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    v7.f = a12;
    this.e = "7";
    a12.b = a13;
}
new F9(v7, "7", v7, "7");
new F9("number", "-1024", v8, "number");
new F9(F3, "7", v7, "-1024");
new Uint8Array(1024);
new Int8Array(2575);
new Uint16Array(9);
const v29 = new Uint32Array();
if (v29 <= 16) {
    +v29;
}
