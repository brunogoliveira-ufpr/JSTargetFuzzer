function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = this;
    this.g = f0;
}
new F1();
new F1();
new f0();
new Uint16Array(f0);
const v11 = new Uint8Array(0);
const v14 = new Int16Array(727);
try { v14.map(f0, v11); } catch (e) {}
const v18 = new Uint16Array(3552);
new Int16Array(16);
new Uint8Array(708);
function f25() {
}
const v26 = [f25];
const v27 = [v26,v26,f25];
const v28 = [v27,f25,v27,v27,f25];
const v29 = [8548,9007199254740990,20545,1686263639,3,20350,24132,-9223372036854775808,619106436,-2147483647];
const v30 = [-56662,-331342346,9007199254740991,4294967296];
const v31 = [1538399720,38775,-12697,-268435456,4,6,256];
function f32(a33, a34) {
    const o47 = {
        [v29]: v28,
        "c": v31,
        valueOf(a36, a37, a38, a39) {
            const o42 = {
                "maxByteLength": 1804,
            };
            const v44 = new SharedArrayBuffer(230, o42);
            new Int32Array(v44);
            return v44;
        },
    };
    return o47;
}
f32(Uint8Array, v29);
const v49 = f32(v28, v28);
const t42 = f32(v31, v30);
t42[v49] = f32;
const o54 = {
};
new Proxy(f25, v18);
[-1257034784,10000,4,-18445,-1412999301,-65536];
[256,6,-39401];
[65537,-9997,-536870912];
let v63 = +v29;
const v64 = 0.0 / v63;
Math.log10(v63);
v64 % 0.0;
v63++;
