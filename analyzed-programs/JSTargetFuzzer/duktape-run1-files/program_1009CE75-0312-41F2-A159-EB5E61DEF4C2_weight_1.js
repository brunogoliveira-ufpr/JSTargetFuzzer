function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.c = a12;
}
new F9(-4294967295n, -9007199254740990n);
new F9(-33086n, -4294967295n);
new F9(-9007199254740990n, -33086n);
for (let v16 = 0; v16 < 86; v16++) {
    new Uint16Array(1);
    new Uint8Array(104);
    new Uint8ClampedArray(1024);
}
