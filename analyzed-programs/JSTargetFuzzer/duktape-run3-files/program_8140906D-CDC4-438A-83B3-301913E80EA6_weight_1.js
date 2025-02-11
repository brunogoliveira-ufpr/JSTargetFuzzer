const v1 = new WeakSet();
const v2 = [v1,v1,v1,v1];
[v1,v1,WeakSet];
const t3 = [v1,v2];
t3[256] = 536870887;
for (let v14 = 0; v14 < 20; v14++) {
    const o17 = {
        "maxByteLength": 16,
    };
    const v19 = new ArrayBuffer(16, o17);
    new BigInt64Array(v19);
}
