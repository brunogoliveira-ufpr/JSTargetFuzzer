new Float32Array(5);
new Int32Array(7);
new Uint8Array(512);
new Int32Array();
function F20() {
    if (!new.target) { throw 'must be called with new'; }
}
const v22 = new F20();
function F23(a25) {
    if (!new.target) { throw 'must be called with new'; }
}
const v26 = new F23();
const v28 = Int32Array >> F20;
v28 === v26;
Math.trunc(v28);
Math.max(v22);
0 < 3;
[];
const v36 = new Array(252);
("748")[512];
const o44 = {
};
new Proxy(Array, o44);
try { ("imul").charCodeAt(252); } catch (e) {}
new Array(65536);
new Date();
v36[v36];
