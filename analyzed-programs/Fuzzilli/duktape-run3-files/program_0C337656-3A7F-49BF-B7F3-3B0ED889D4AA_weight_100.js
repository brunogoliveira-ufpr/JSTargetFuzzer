function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 4096;
    this.b = 4096;
    this.c = 4096;
}
new F0();
new F0();
new F0();
const v8 = new Float64Array(161);
const v11 = new Int8Array(1000);
v11.toString = 1000;
for (let v13 = 0; v13 < 32; v13++) {
    v8["p" + v13] = v13;
}
new Float32Array(1000);
const o18 = {
};
const v19 = [-4.828609728757649,0.24386730580345295,642760.9936903215,-5.839802031611556e+305,4.1763773184079405,697433.1629372805];
-o18 ^ v19;
