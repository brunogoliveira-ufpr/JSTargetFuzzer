function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -20508;
    this.g = -20508;
}
const v3 = new F0();
const v4 = new F0();
new F0();
const o15 = {
};
new Proxy(v4, o15);
let [v19,v20,v21] = 14;
v3.b;
