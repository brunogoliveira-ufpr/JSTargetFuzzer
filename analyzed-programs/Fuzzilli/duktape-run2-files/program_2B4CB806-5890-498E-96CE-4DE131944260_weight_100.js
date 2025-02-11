function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1000;
    this.h = 1000;
    this.b = 1000;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a17;
}
new F15(-2, v5);
new F15(8, v4);
new F15(4, v5);
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 10000;
    this.e = 10000;
    this.b = 10000;
    this[F22] |= 10000;
    let v27 = ~65536;
    const v28 = 10000 | v27;
    ++v27;
    65536 % 65536;
    v28 / 10000;
}
const v32 = new F22();
const v33 = new F22();
const v34 = new F22();
[-1000000000000.0,-1000.0,-34631.8749540695,0.15235343101397159,494.6406893034409,-46350.41258539993,-1000.0,556257.7094948704,-1.7976931348623157e+308,5.0];
[3.0,7.534246138465733,1e-15];
[48857.04908600007,1.3713257339325883e+308,357.89209813985894,1.0,Infinity];
new Uint32Array(0);
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a46;
    this.c = a48;
}
new F44(v33, v34, 0);
new F44(v32, v32, Uint32Array);
function F54(a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a56;
    a56.a = -16;
    this.f = 5;
}
const v58 = new F54(5, 1073741825);
const v59 = new F54(1073741825, 1073741825, F54, v58, F54);
new F54(-16, 1073741825);
let v61 = 3406;
new Int8Array(v59);
new Int32Array(6);
new Float32Array(v61, Float32Array);
[-1898451916,16,-2147483649,-775641375,9,536870889,-49325,65535,-4];
const v74 = !-16;
-16 ^ 65537;
const v76 = -4.829194895972513 << v74;
v61++ % v76;
new F44(v34, v33, v34);
new Float32Array(8);
new Uint8Array(1);
function F84(a86, a87, a88, a89) {
    if (!new.target) { throw 'must be called with new'; }
    const v90 = [a88];
    for (let v92 = 0; v92 < 5; v92++) {
        const t67 = "-1597015378";
        t67["p" + v92] = v92;
    }
    v90["indexOf"]();
}
new F84(F84, F84, F84, F84);
