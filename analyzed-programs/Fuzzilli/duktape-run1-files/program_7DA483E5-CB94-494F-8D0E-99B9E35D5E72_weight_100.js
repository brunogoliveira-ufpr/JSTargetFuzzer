function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0;
    this.f = 0;
    this.b = 0;
}
new F0();
new F0();
new F0();
const v6 = new F0();
v6.__proto__;
let v15 = 512;
const v18 = new Object(Object);
const v19 = [Object,Object,Object,v18,v18,Object,Object];
const v20 = [Object];
const v21 = [v20,v20];
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    const v26 = ~this;
    v15 = -9007199254740990;
    this[129] = -4096;
    var e = Object;
    function f27() {
        return v26;
    }
    this.d = v19;
}
new F22(v21, F22);
const v29 = new F22(v21, v21);
new F22(v20, v29);
new Uint32Array(65536);
new Int16Array(13);
new Int8Array(1013);
const v41 = new Float32Array();
+v41;
