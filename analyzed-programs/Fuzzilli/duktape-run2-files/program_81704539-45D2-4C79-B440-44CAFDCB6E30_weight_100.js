function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 268435441;
    this.e = 268435441;
    this.c = 268435441;
}
const v3 = new F0();
new F0(v3);
new F0();
new Uint32Array(0);
new Float32Array(257);
new Uint8ClampedArray(3060);
const v18 = [];
let v19 = undefined;
v19 = v18;
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F20(v18, v18, v19);
const v26 = new F20(v25, v18, v25);
v25 !== v26;
