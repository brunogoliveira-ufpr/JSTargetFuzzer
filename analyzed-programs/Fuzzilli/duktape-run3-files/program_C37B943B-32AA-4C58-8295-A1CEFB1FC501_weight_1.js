new Float64Array(8);
new Int8Array(128);
new Int8Array(15);
const v17 = new Uint8Array(Uint8Array);
new Int16Array(v17, Int16Array);
new Uint32Array(Uint32Array);
new Int32Array();
function f24(a25, a26) {
    const o27 = {
        [a25]: a25,
        [-1.0]: v17,
    };
    function F28() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v30 = new F28();
    const v32 = Array();
    v32.__proto__ = v30;
    const o34 = {
        [v32]: 257,
    };
    return o27;
}
f24();
