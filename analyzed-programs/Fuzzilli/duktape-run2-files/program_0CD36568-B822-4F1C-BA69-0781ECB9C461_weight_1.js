function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 26033;
    this.f = 26033;
}
new F0();
const v4 = new F0();
new F0();
let v7 = Uint16Array;
const v8 = new v7(1094);
const v11 = new Uint8Array(450);
new Int8Array(2);
v11.a = v4;
v11[Int8Array] = v7;
const o15 = {
};
const v17 = new Proxy(v8, o15);
v8.g = v17;
delete v17?.f;
let v19 = new F0();
({"d":F0,"g":v19,...v7} = v19);
