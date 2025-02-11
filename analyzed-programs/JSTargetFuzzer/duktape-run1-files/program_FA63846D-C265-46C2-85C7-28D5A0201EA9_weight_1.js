function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -10;
    this.b = 2;
    this.e = 2;
}
const v6 = new F3(-10);
const v7 = new F3(2);
const v8 = new F3(2016650410);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F3;
    this.a = v8;
}
new F9(v8, v7, v8, v8);
new F9(v7, v6, v8, v6);
new F9(v8, v8, v6, v6);
const o23 = {
    "maxByteLength": 65537,
};
const v25 = new SharedArrayBuffer(3127, o23);
new Float32Array(v25);
