function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = 256;
    t2.b = 256;
    this.c = 256;
}
new F0();
new F0();
new F0();
new Uint16Array(1024);
new Uint8Array(9);
new Int16Array(4);
const o19 = {
};
for (const v20 in 1) {
}
const v21 = !o19;
const v24 = ([10000,-1024,-11,10000,-1043097953,-231676010,619980035,-65536]).length;
let v25;
try {
const t0 = -1.4417289740163674e+308;
v25 = t0(v24);
} catch (e) {}
const v27 = new Int16Array(v24, v24, 1);
v27 >> v21;
try { v25(1024); } catch (e) {}
Uint8Array && v25;
