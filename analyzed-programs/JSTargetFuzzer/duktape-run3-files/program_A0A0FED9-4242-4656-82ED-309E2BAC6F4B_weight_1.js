function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = "MIN_SAFE_INTEGER";
    this.a = "MIN_SAFE_INTEGER";
    this.h = "g";
}
new F3("65536", "65536");
new F3("g", "MIN_SAFE_INTEGER");
new F3("g", "65536");
let v16 = 0;
do {
    const t11 = "MIN_SAFE_INTEGER";
    t11.valueOf = -4294967296 !== "g";
    v16++;
} while (v16 < 8)
