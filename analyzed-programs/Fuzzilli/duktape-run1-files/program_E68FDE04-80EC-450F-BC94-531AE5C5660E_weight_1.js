const v1 = new Date();
new Uint16Array(1838);
new Int16Array(1000);
const v13 = new BigInt64Array(3109);
v13[9] = v1;
let v14;
try { v14 = v13.slice(); } catch (e) {}
let v15 = 0;
while (v15 < 1) {
    try { Date.parse(v14); } catch (e) {}
    v15 >>> 1838;
    v15++;
}
