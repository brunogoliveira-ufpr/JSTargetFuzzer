function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = "global";
}
new F3("global", "global");
new F3("p", "global");
new F3("global", "p");
new ArrayBuffer(3838);
new Int32Array(1357);
new Float32Array(1);
[3838,"p",1357];
const v22 = new Int32Array(5);
const v24 = new Uint8Array(5);
for (const v25 in v22) {
    v25 >> v25;
}
try { v24.every(5); } catch (e) {}
[6,40289,65535,1,129,-3226,45226,37702];
