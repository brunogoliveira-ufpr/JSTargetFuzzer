function f0() {
}
new f0();
function f17() {
    return "function";
}
new f17();
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
}
const v26 = new F21(F21, F21, F21);
const o27 = {
};
new Proxy(v26, o27);
65537 << !-16;
