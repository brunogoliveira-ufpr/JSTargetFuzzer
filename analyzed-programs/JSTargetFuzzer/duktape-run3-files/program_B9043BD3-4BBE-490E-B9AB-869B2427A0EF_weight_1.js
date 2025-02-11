new Int8Array(257);
new Float32Array(3159);
new Uint16Array(3113);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.g = -65537;
}
const v19 = new F16();
new F16();
const v21 = new F16();
const o28 = {
    3: 9223372036854775807,
    __proto__: v19,
};
o28[Infinity] = Infinity;
v21[v21.a];
