function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = undefined;
    this.h = undefined;
    this.g = undefined;
}
new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
    this.h = a8;
    this.e = F1;
}
let v9 = new F6(v4);
new F6(v4);
new F6(v5);
[753.7774213551429,-1.5135708635118781e+308,-5.6008966172687185,Infinity,-1.1772365804420683e+308,-1.364459099473132,-3.0,6.685557938448955,-1.7976931348623157e+308];
[0.0];
[1.3521624627267695e+307,-1e-15,Infinity,4.0];
new Uint8ClampedArray(1024);
new Int16Array(3);
const v23 = new Int8Array(10);
v23[v23] = 10;
!3.0;
const v29 = --v9;
Math.acos(v29);
const v31 = Uint8ClampedArray ** v29;
3.0 || 3.0;
!v31;
