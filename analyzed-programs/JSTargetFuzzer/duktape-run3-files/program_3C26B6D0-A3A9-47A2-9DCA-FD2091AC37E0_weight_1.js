function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741824;
    this.b = 1073741824;
}
new F0();
new F0();
new F0();
let v15 = 0;
do {
    v15++;
} while (v15 < 6)
