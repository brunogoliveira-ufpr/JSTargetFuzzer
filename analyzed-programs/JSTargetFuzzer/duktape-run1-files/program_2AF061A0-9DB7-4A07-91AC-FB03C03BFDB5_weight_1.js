function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9223372036854775807;
}
new F0();
new F0();
new F0();
new Float32Array(695);
new Float64Array(8);
new Uint8Array(10);
new Int32Array(1000);
new Float64Array(14);
new Float32Array(1000);
new Uint16Array(1000);
new Float32Array(14);
new Uint32Array(1024);
const v38 = new Array(252);
("imul")[512];
const o46 = {
};
const v48 = new Proxy(Array, o46);
try { ("imul").charCodeAt(1024); } catch (e) {}
new Array(252);
new Date();
v48[v38];
