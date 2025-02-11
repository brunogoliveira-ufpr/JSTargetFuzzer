const v1 = new Map();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Map;
    this.f = v1;
    this.h = a4;
}
new F2(Map);
new F2(v1);
const v7 = new F2(Map);
const v8 = [v7,v7];
const v9 = [v8,v1];
const v10 = [F2,v9,v9,v8];
const o14 = {
};
const v16 = new Proxy(v10, o14);
v16.toString = v10;
let v17 = 0;
while (v17 < 1) {
    const o22 = {
        "maxByteLength": 536870889,
    };
    const v24 = new SharedArrayBuffer(16, o22);
    new Float64Array(v24);
    v17++;
}
