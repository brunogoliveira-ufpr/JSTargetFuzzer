function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 4096;
    this.b = 4096;
    this.c = 4096;
}
const v15 = new F12();
new F12();
new F12(v15);
const v20 = new Float64Array(161);
const v23 = new Int8Array(1000);
v23.c = 161;
for (let v25 = 0; v25 < 32; v25++) {
    v20["exp" + v25] = v25;
}
new Float32Array(1000);
const o30 = {
};
let v31 = [-4.828609728757649,0.24386730580345295,642760.9936903215,-5.839802031611556e+305,4.1763773184079405,697433.1629372805];
++v31;
161 ^ v31;
