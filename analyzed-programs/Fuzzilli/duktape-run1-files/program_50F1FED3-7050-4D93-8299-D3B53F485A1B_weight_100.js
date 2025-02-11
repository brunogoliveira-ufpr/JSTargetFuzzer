function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor = false;
    this.e = false;
}
new F1();
new F1();
new F1();
new Date(896);
