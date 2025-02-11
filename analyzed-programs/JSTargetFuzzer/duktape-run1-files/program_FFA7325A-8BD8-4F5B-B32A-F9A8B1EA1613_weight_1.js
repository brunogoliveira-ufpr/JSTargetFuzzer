function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -9007199254740991;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4];
const v7 = [v6,v3,v6,F0,v6];
const v8 = [v7,v7,v6,v6,v7];
[v6,[v5,v8,v5,v8],v7];
[v3,v5,v3,v6,v6];
const v14 = new Int16Array(2213, F0);
new Uint16Array(1000);
new Float32Array(109);
let v27 = 0;
do {
    const o28 = {
    };
    new Proxy(v14, o28);
    v27++;
} while (v27 < 5)
