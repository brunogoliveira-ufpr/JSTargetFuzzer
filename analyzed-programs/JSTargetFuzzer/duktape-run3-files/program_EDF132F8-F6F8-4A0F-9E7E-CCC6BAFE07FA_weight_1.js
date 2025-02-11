function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -9007199254740991;
}
new F6(-13n, -13n);
new F6(-268435456n, 1024n);
new F6(-13n, 1024n);
const v14 = new Set();
let v15 = 0;
while (v15 < 1) {
    function f18() {
        return 1024n;
    }
    for (let v19 = 0; v19 < 32; v19++) {
        v14["p" + v19] = v19;
    }
    v15++;
}
