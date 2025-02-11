function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 536870887;
}
new F0();
new F0();
new F0();
new Float64Array(9);
new Uint8ClampedArray(16);
new Uint16Array(512);
new Float64Array(1000);
new Float32Array(15);
new Int32Array(1024);
Int32Array ** F0;
