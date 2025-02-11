function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 206756690;
    this.c = 206756690;
}
new F0();
new F0();
new F0();
const o18 = {
};
new Proxy(F0, o18);
o18[-1];
o18 !== F0 ? o18 : F0;
