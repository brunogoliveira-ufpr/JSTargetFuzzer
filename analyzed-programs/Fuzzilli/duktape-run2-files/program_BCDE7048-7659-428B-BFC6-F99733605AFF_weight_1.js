const v3 = new Float32Array(752);
new Uint8Array(128);
new Int32Array(5);
function f10() {
    return v3;
}
const v12 = [[128,Uint8Array,Float32Array],Float32Array,f10];
const v13 = [f10,5];
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a18;
}
new F14(v12, 5, v12);
const v20 = new F14(v13, 5, v13);
const v21 = new F14(v13, 128, v13);
v20 !== v21 ? v20 : v21;
v13[193] = Uint8Array;
let v25 = 256;
const v28 = !(5 ^ 5) >>> v25;
!5;
let v30 = v25++;
-v28;
v30--;
