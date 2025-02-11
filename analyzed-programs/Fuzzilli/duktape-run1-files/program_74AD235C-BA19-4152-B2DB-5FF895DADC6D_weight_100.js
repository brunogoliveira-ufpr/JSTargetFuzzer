const v1 = new Object(Object);
const v2 = [Object,Object,Object,v1,v1,Object,Object];
const v3 = [Object];
const v4 = [v3,v3];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v2;
}
new F5(v4, F5);
const v10 = new F5(v4, v4);
new F5(v3, v10);
new Uint32Array(65536);
new Int16Array(13);
new Int8Array(1013);
const v22 = new Float32Array();
+v22;
