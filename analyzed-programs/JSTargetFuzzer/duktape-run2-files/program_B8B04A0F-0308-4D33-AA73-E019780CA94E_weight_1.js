function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.h = f0;
}
new F1();
new F1();
new F1();
const t10 = [-7,16,-15175,536870887,512];
delete t10[136];
new Float32Array(4096);
new Uint32Array(2);
new Uint16Array(4068);
new Int8Array(13);
new Int32Array(1022);
new Float64Array(4);
for (const v36 in "string") {
    const v39 = ("bigint")["p"];
    function f40() {
        const o41 = {
        };
        return o41;
    }
    const t25 = f40();
    t25["p" + v39] = v39;
}
new Float32Array(1000);
const v49 = new Int32Array(16);
const v52 = new Int16Array(3144);
const v56 = 3144 >> v52;
let v57;
try { v57 = Int16Array(v56, 1000, 3144); } catch (e) {}
v49.byteOffset;
switch (0.01413596778607562) {
    case -1.6775380604269171e+308:
        break;
    case v49:
        try { Int32Array(); } catch (e) {}
        break;
    case -1.7976931348623157e+308:
        try { v57(); } catch (e) {}
        break;
    default:
        v52.byteOffset;
        break;
}
