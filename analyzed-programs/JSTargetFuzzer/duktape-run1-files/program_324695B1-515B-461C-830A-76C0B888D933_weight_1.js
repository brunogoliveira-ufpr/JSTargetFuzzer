function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.e = f0;
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
new Set();
if (32538 == Set) {
    function F15(a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = f0;
        this.e = a17;
        this.b = v3;
    }
    new F15(10n, v3, 32538);
    new F15(255n, v5, 32538);
    new F15(10n, v4, 32538);
} else {
    typeof v4 === "function";
}
