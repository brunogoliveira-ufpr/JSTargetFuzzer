function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.sticky = 7;
    this.h = 7;
}
new F0(F0, F0);
new F0();
new F0();
new TypeError();
new Int8Array(2944);
new Float64Array(127);
new Int32Array(0);
const v25 = new Array(252);
("748")[512];
const o33 = {
};
new Proxy(Array, o33, "748", Int8Array, Proxy);
try { ("imul").charCodeAt(252); } catch (e) {}
new Array(65536);
new SyntaxError();
v25[v25];
