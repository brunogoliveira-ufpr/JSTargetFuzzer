function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
}
new F4(-5);
const v8 = new F4(-5);
const v9 = new F4(-27519);
let v10 = 20318;
({"b":v10,} = v9[6]);
for (let v14 = 0; v14 < 32; v14++) {
    v9["p" + v14] = v14;
}
v8.c;
v8[Symbol.toPrimitive];
