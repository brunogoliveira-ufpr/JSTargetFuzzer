function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 65535;
    this.b = 65535;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1000;
    this.d = -9223372036854775807;
    this.g = a15;
}
new F12(F0, v4);
new F12(5, v3);
new F12(-1515711025n, v5);
for (const v22 in v5) {
    const v23 = v5.__proto__;
    Object.defineProperty(v3, 10, { writable: true, configurable: true, value: F0 });
    for (let v24 = 0; v24 < 32; v24++) {
        v23["p" + v24] = v24;
    }
}
-40477n instanceof F0;
