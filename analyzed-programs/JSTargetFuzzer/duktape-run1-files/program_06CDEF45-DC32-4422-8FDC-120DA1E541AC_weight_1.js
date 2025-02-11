const v1 = [,];
const v2 = [,v1];
const v3 = [v1,v1,v2];
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a10;
}
new F7(268435441, v3);
new F7(-256, v1);
const v13 = new F7(268435441, v1);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -256;
    this.b = a17;
}
new F14(v1, F7, v3, -256);
new F14(v1, v13, v2, -4294967295);
new F14(v3, undefined, v1, -4294967295);
const v25 = new Int16Array(2213);
new Uint16Array(1000);
new Float32Array(109);
let v38 = 0;
do {
    const o39 = {
    };
    new Proxy(v25, o39);
    v38++;
} while (v38 < 5)
