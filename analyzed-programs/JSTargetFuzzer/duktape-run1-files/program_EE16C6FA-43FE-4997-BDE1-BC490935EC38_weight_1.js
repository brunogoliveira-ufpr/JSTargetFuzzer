function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -299469847;
}
new F0();
const v4 = new F0();
new F0();
const v9 = new Float64Array(1000);
const v12 = new Int8Array(512);
new Int8Array(1608);
try {
    [-1703073762,255,-1002089504,536870887,1323242924,-2,2,-2134592174];
    [1024,-1073741824,-9,-1,-1,65535];
    [11,-1950852751,1000,-256];
} finally {
    let v25;
    try {
    const t0 = 256;
    v25 = t0(2147483648, v4, v9, v12, Int8Array);
    } catch (e) {}
    v25 | F0;
}
