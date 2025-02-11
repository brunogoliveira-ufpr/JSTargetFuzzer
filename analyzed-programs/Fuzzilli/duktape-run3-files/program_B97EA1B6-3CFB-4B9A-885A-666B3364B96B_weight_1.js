function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4;
    this.h = 4;
    this.b = 4;
}
new F0();
new F0();
new F0();
const v11 = new Uint8Array(8);
new Uint32Array(4096);
new Uint16Array(16);
try { v11.sort(-4n); } catch (e) {}
("function").normalize("NFD");
const v25 = ("NFD")[65536];
try { v25(); } catch (e) {}
