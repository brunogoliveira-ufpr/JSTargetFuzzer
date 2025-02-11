new Uint8ClampedArray(64);
new Float32Array(512);
new Int16Array(5);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -921748189;
    this.b = -921748189;
}
const v18 = new F15();
new F15();
new F15();
function f21() {
    return v18;
}
function f22() {
    return f21;
}
function f23() {
    return v18;
}
const v31 = new Int8Array();
([true,true]).length;
true ** 64;
delete v31[3];
