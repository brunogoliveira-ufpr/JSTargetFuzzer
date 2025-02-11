function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65537;
    this.e = -65537;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v6 = [F0,v3];
const v7 = [F0,F0,v3];
const v12 = [v7,v6,v6,v5,[v7,v5,v3],v3];
const v13 = [v12,"number"];
[v5,v13,v12,v13];
function f15() {
}
new Uint16Array(9);
new Int8Array(129);
new Uint16Array(1024);
const v30 = new Int32Array(2213);
new Uint16Array(1000);
new Float32Array(129);
let v41 = 14;
do {
    const o44 = {
    };
    new Proxy(v30, o44);
    v41++;
} while (5 < 5)
