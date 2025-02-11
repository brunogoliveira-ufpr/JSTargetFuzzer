function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -9223372036854775807;
}
new F0();
new F0();
new F0();
new Int8Array(255);
new Uint8ClampedArray(167);
new Uint8ClampedArray(94);
