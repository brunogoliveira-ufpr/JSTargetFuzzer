function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1000;
    this.a = 1000;
    this.c = 1000;
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = a5;
        this.g = a6;
        this.a = a6;
    }
    const v7 = new F3(F0, F3);
    new F3(v7, 1000);
    new F3(this, F0);
}
new F0();
new F0();
new F0();
new Int32Array(1);
new Uint32Array(7);
new Uint32Array(614);
const o24 = {
    get d() {
        return this;
    },
    get d() {
        return this;
    },
};
