function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2;
    this.h = 2;
    this.f = 2;
}
new F0();
new F0();
new F0();
const v8 = new Float32Array(333);
const v11 = new Uint16Array(3879);
const v14 = new Int8Array(1234);
let [] = v11;
v8.length = 4;
let [] = v14;
