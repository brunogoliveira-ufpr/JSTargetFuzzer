class C3 {
    constructor(a5, a6) {
        let v7;
        try { v7 = this.trimStart(this, 536870912, this, a6, a5); } catch (e) {}
        function F8(a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a10;
        }
        new F8(this, 4096, 536870912);
        const v14 = new F8(v7, 4096, 512);
        new F8(a6, v14, a5);
    }
    #a;
    #e = 512;
    #b = 4096;
}
const v16 = new C3(536870912, 4096);
new C3(4096, v16);
new C3(4096, 4096);
v16[16] = -50984n;
new Map();
new Int32Array(132);
new Uint16Array(13);
new Uint32Array(2691);
