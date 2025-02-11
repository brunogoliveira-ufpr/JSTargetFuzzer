function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 256;
}
new F0();
new F0();
new F0();
new Int8Array(7);
new Float64Array(8);
new Uint32Array(177);
function f18() {
}
const v19 = [f18];
const v20 = [v19,v19,f18];
const v21 = [v20,f18,v20,v20,f18];
const v22 = [8548,9007199254740990,20545,1686263639,3,20350,24132,-9223372036854775808,619106436,-2147483647];
[-56662,-331342346,9007199254740991,4294967296];
const v24 = [1538399720,38775,-12697,-268435456,4,6,256];
function f25(a26, a27) {
    const o40 = {
        [v22]: v21,
        "c": v24,
        valueOf(a29, a30, a31, a32) {
            const o35 = {
                "maxByteLength": 1804,
            };
            const v37 = new a31(230, o35);
            new Int32Array(v37);
            return a29;
        },
    };
    return o40;
}
const v41 = f25(v19, v22);
const v42 = f25(v19, v21);
const t35 = f25(v24, v22);
t35[v42] = v41;
const o47 = {
};
new Proxy(f18, o47);
[-1257034784,10000,4,-18445,-1412999301,-65536];
[256,6,-39401];
[65537,-9997,-536870912];
const v56 = +v22;
const v57 = 0.0 / v56;
Math.log10(v56);
let v59 = v57 % 0.0;
v59++;
