function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F1;
}
const v3 = new F1();
new f0();
const v5 = new F1();
const v6 = [f0];
[v6,v5,f0,v3,v6];
[v3];
new Float32Array(3645);
new Uint32Array(6);
new Float32Array(1000);
Uint8ClampedArray > -361428806;
const o21 = {
    __proto__: 3645,
};
