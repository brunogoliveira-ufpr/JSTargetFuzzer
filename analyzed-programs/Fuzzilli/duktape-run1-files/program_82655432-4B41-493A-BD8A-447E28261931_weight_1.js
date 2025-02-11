function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
}
const v3 = new F1();
let v4 = new F1();
new F1();
const v7 = new WeakSet();
const v8 = [v7];
const v9 = [v8,F1,WeakSet,v8,F1];
[v9,v4];
const o14 = {
    "get": f0,
};
new Proxy("object", o14);
v9["unshift"]();
++v4;
let v24 = 2 * 2;
Math.log1p(-65536);
v24++;
const v27 = !v3;
~v24 - v27;
