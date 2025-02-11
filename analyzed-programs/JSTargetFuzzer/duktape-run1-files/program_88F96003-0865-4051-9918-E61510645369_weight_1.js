class C3 {
    constructor(a5, a6) {
        const o9 = {
            "maxByteLength": 128,
        };
        const v11 = new ArrayBuffer(128, o9);
        new Uint8Array(v11);
    }
}
let v14 = new C3("getUTCDate", "GlGM");
new C3(0.0, v14);
const v16 = new C3("getUTCDate", "getUTCDate");
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a22;
    this.d = 0.0;
    this.b = a21;
}
const v23 = new F17("GlGM", C3, "getUTCDate", C3);
const v24 = new F17(v14, "GlGM", "getUTCDate", v23);
new F17(v24, v14, "GlGM", v23);
class C26 {
    constructor(a28, a29, a30) {
        const v31 = a28.b;
        v14 = v31;
        const v32 = [a28];
        [[v32,v31,a29],"getUTCDate",v32,"getUTCDate"];
    }
}
const v35 = new C26(v24, v24, v16);
new C26(v23, v14, v35);
new C26(v14, "getUTCDate", C26);
